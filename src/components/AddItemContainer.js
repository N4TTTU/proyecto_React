import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import './AddItemContainer.css';
import { db } from '../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddItemContainer = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState();

    const handleTitleChange = event => setTitle(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleCategoryChange = event => setCategory(event.target.value);
    const handlePrecioChange = event => setPrecio(event.target.value);
    const handleStockChange = event => setStock(event.target.value);
    const handleImageChange = event => setImage(event.target.files[0]);


    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(title);
        if (![title, category, description].some(field => field === "")) {
            
            let imgUrl = "https://via.placeholder.com/450?text=Sin+Imagen";

            const itemCollection = collection(db, "items");


            if (typeof image !== "undefined") {
                const storage = getStorage();
                const imgName = (+ new Date()).toString(36);
                const storageRef = ref(storage, `items/${imgName}`);
                const uploadTask = await uploadBytes(storageRef, image);
                imgUrl = await getDownloadURL(uploadTask.ref);
            }


            const newItem = {
                title: title,
                category: category,
                description: description,
                precio: precio,
                stock: stock,
                imgUrl: imgUrl
            }



            addDoc(itemCollection, newItem).then(doc => {
                console.log("Se guardó correctamente el nuevo artículo", doc.id);
            }).catch(error => {
                console.log(error);
            })

        } else {
            console.log("Hay campos vacíos");
        }
    }

    return (

        <div>
            <div>
                <h1>    Agregar Producto    </h1>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label> Nombre del productos </label>
                        <input value={title} onChange={handleTitleChange} type="text" />
                    </div>
                    <div>
                        <label> Descripción del productos   </label>
                        <input value={description} onChange={handleDescriptionChange} type="text" />
                    </div>
                    <div>
                        <label> Categoria   </label>
                        <input value={category} onChange={handleCategoryChange} type="text" />
                    </div>
                    <div>
                        <label> Precio   </label>
                        <input value={precio} onChange={handlePrecioChange} type="text" />
                    </div>
                    <div>
                        <label> Stock   </label>
                        <input value={stock} onChange={handleStockChange} type="text" />
                    </div>
                    <div>
                        <label> Imagen del producto   </label>
                        <input name='file' onChange={handleImageChange} type="file" />
                    </div>

                    <button type='submit'>    Enviar      </button>

                </form>
            </div>
        </div>
    )
}

export default AddItemContainer;