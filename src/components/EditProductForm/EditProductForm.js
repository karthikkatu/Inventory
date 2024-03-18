import React, { useState} from "react";
import { Dialog } from '@headlessui/react';
import styles from "./EditProductForm.module.css";




const EditProductForm = ({showForm, setShowForm, editProduct, product}) => {

    const [category, setCategory] = useState(product.category);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);
    const [value, setValue] = useState(product.value);

    const setQuantityField = (event) => {
        setQuantity(+event.target.value);
        setValue(+event.target.value * price);
    }

    const setPriceField = (event) => {
        setPrice(+event.target.value);
        setValue(quantity * +event.target.value);
    }

    const setCategoryField = (event) => {
        setCategory(event.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.nativeEvent.submitter.getAttribute('type') === 'submit')
            editProduct(product.id, {...product, category, price, quantity, value});
        setShowForm(false);
    }

    return (
        <div className={styles.backDrop}>
            <Dialog open={showForm} onClose={() => setShowForm(false)}  className={styles.modal}>
            <Dialog.Panel>

            <Dialog.Title className={styles.title}>Edit Product <button className={styles.close} onClick={() => setShowForm(false)}> X </button></Dialog.Title>
            <div className={styles.productName}> {product.name} </div>
            <Dialog.Description>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputFieldContainer}>
                        <div className={styles.inputField}>
                        <label> Category </label><input type="text" value={category} onChange={setCategoryField}/>
                        </div>
                        <div className={styles.inputField}>
                        <label> Price </label><input type="number" value={price} onChange={setPriceField} />
                        </div>
                        <div className={styles.inputField}>
                        <label> Quantity </label><input type="number" value={quantity} onChange={setQuantityField} />
                        </div>
                        <div className={styles.inputField}>
                        <label> Value </label><input type="number" value={price * quantity} disabled={true} />
                        </div>
                    </div>
                    
                    <div className={styles.buttonContainers}>
                        <button type="cancel" className={styles.cancelButton}  >Cancel</button>
                        <button type="submit" className={styles.submitButton}  >Submit</button>
                    </div>
                    
                </form>
            </Dialog.Description>
            </Dialog.Panel>
            </Dialog>
         </div>
        
            
    );
}
export default EditProductForm;