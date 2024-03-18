import React, { useContext, useState} from "react";
import view from "../../resources/view.png";
import hide from "../../resources/hide.png";
import bin from "../../resources/bin.png";
import edit from "../../resources/pencil.png";
import styles from "./ActionButtons.module.css"
import UserContext from "../../contexts/userContext";
import EditProductForm from "../EditProductForm/EditProductForm";


const ActionButtons = ({product, delete: deleteProduct, edit: editProduct}) => {

    const [isAdminUser] = useContext(UserContext);
    const [isDisabled, setIsDisabled] = useState(!isAdminUser);
    const [showForm, setShowForm] = useState(false);

    const editClickHandler = () => {
        setShowForm(true);
    }

    const disabler = () => {
            setIsDisabled((prevState) => !prevState);
            editProduct(product.id, {...product,disabled:!product.disabled});   
    }

    const handleDelete = () => {
        deleteProduct(product.id);
    }

    return (
        <>
        {showForm && <EditProductForm showForm={showForm} setShowForm={setShowForm} product={product} editProduct={editProduct}/>}
        <button disabled={isDisabled || !isAdminUser} onClick={editClickHandler} className={styles.actionIcons}>
            <img src={edit} alt="icon"/>
        </button>
        <button disabled={!isAdminUser} onClick={disabler} className={styles.actionIcons}>
            <img src={(isDisabled) ? view : hide} alt="icon" />
        </button>
        <button disabled={isDisabled || !isAdminUser} onClick={handleDelete} className={styles.actionIcons}>
            <img src={bin} alt="icon"/>
        </button>
        </>
    );
}



export default ActionButtons;