import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import productJson from '../../data/products.json';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    //Lo primero es capturar la categoría que quiero filtrar
    const { categoryId } = useParams()
    console.log(categoryId)

    //Este effect se ejecuta cuando se monta el componente
    useEffect(() => {

        //Caso JSON propio
        const getProducts = () => {

            const obtenerProductos = new Promise((res, rej) => {
                setTimeout(() => {
                    res(productJson)
                }, 3000)
            })

            obtenerProductos
                .then(productos => {
                    if (categoryId) {
                        const productosFiltradosPorCategoria = productos.filter(producto => producto.category === categoryId)
                        console.log(productosFiltradosPorCategoria)
                        setProducts(productosFiltradosPorCategoria)
                    } else {
                        setProducts(productos)
                    }
                })
                .catch(error => console.log(error))
        }

        getProducts()



    }, [categoryId])



    console.log(products)

    return (
        <div>
            <ItemList productos={products} />
        </div>
    )
}

export default ItemListContainer


