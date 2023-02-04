import React, { useContext, useState } from 'react';
import TableRow from './TableRow';
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import FormComp from '../../components/Form';
import Spinner from 'react-bootstrap/Spinner';
import "./style.css";
import Swal from 'sweetalert2';


const Cart = () => {

    const { products, total, cleanCart } = useContext(Shop);

    const [formVis, setFormVis] = useState(false);

    const [loader, setLoader] = useState(false);

    console.log(products)

    const confirmPurchase = async (dataDelFormulario) => {
        const { phone: telefono, nombre, email } = dataDelFormulario
        try {
            setLoader(true);

            const order = generateOrderObject({
                nombre,
                email,
                telefono,
                cart: products,
                total: total()
            })

            // setFormVis(true);
            console.log(order);

            //Almacenar la order en firebase y con el ID autogenerado por firebase, mostramos un alert de confirmación de compra.

            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "orders"), order);
            cleanCart()
            //Posteriormente actualizar el stock de los productos existentes.
            for (const productCart of products) {
                const productRef = doc(db, "products", productCart.id);


                await updateDoc(productRef, {
                    stock: productCart.stock - productCart.quantity
                });
            }

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: "Orden confirmada con ID: " + docRef.id
            })

        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
            setFormVis(false);
        }
    }

    return (
        <>
            {

                products.length !== 0 ?
                    <>
                        <h1 className='text-cart'>Casi Terminas!</h1>
                        <table class="table table-striped table-color">
                            <thead>
                                <tr>
                                    
                                    <th className='col-color' scope="col">Image</th>
                                    <th className='col-color' scope="col">Title</th>
                                    <th className='col-color' scope="col">Price</th>
                                    <th className='col-color' scope="col">Quantity</th>

                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => {
                                    return <TableRow key={product.id} product={product} />
                                })}
                            </tbody>
                        </table>
                        {
                            loader ?
                                <Spinner animation="grow" variant="success" />
                                :
                                <button className='btn btn-success btn-confirm btn-lg' onClick={() => setFormVis(true)}>Confirm purchase</button>
                        }
                    </>
                    :
                    <>
                        <h1 className='text-loading'>Su carrito está vacio.</h1>
                        <button className='btn-loading btn btn-success btn-lg btn-home'>
                            <Link to="/">Go To Home</Link>
                        </button>
                    </>
            }
            {formVis ?
                <FormComp
                    confirmPurchase={confirmPurchase}
                    formVis={formVis}
                    setFormVis={setFormVis}
                />
                : null
            }


        </>

    )
}

export default Cart