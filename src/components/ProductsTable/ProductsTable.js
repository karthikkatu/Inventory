import React from "react";
import ActionButtons from "../ActionButtons/ActionButtons";
import styles from "./ProductsTable.module.css";

const ProductsTable = ({productState}) => {

    const [productsData, setProductsData] = productState;

    const deleteProduct = (id) => {
        setProductsData(productsData.filter((product => product.id !== id)));
    }

    const editProduct = (id, newData) => {
        setProductsData(
            (prevState) =>  [...prevState.map((product => {
                if(product.id === id) {
                    return newData;
                }
                return product;
            }))]
            );
    }

    

    return (
        <>
            <table border={1} frame="void" rules="rows">
                <tbody>
                <tr>
                   <th> <span className={styles.columnHeader}>Name</span> </th> 
                   <th> <span className={styles.columnHeader}>Category</span> </th> 
                   <th> <span className={styles.columnHeader}>Price</span> </th> 
                   <th> <span className={styles.columnHeader}>Quantity</span> </th> 
                   <th> <span className={styles.columnHeader}>Value</span> </th> 
                   <th> <span className={styles.columnHeader}>Actions</span> </th> 
                </tr>
                
                    {productsData.map((product) => {
                        return (
                            <tr key={product.id} className={product.disabled ? styles.disabledProduct : ''}>
                                <td className={styles.tableData} >{product.name}</td>
                                <td className={styles.tableData}>{product.category}</td>
                                <td className={styles.tableData} >${product.price}</td>
                                <td className={styles.tableData} >{product.quantity}</td>
                                <td className={styles.tableData} >${product.price * product.quantity}</td>
                                <td className={styles.tableData} > <ActionButtons product={product} delete={deleteProduct} edit={editProduct}/> </td>
                            </tr>
                        );
                    })}
                </tbody>    
            </table>
        </>
    )

}

export default ProductsTable;