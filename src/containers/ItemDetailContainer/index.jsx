import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import "./style.css"
import { doc, getDoc,} from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const { id } = useParams()

    //Este effect se ejecuta cuando se monta el componente
    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const productDetail = {
                id: docSnap.id,
                ...docSnap.data()
                }
                setDetail(productDetail);
            } else {
              // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }
            
            getProduct();
            
    



    }, [id])

    return (
        <div>
            {
                Object.keys(detail).length === 0 
                ? <h3 className='loading-detail'>Loading...</h3>
                : <ItemDetail detail={detail} />
            }  
        </div>
    )
}

export default ItemDetailContainer