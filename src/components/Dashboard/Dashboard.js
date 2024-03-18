import React, { useEffect, useState } from "react";
import InformationCards from "../InformationCards/InformationCards";
import ProductsTable from "../ProductsTable/ProductsTable";
import styles from "./DashBoard.module.css";
import axios from "axios";


const Dashboard = () => {

    const [products, setProductsData] = useState();

    const getProductsData = (products) => {
        return products.map((product) => {
            return {...product,
                id: Math.floor(Math.random() * 10000000),
                value: getNumericValue(product.value),
                price: getNumericValue(product.value), disabled:false};
        })
    };

    const getNumericValue =(s) => {
        return +(s.substring(1));
    }

    useEffect( () => {
        axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory')
        .then(response => setProductsData(getProductsData(response.data)))
        .catch(err => console.log(err.message));
    }, []
    );
    
    if(!products)return null;

    const getProductsCount = () => {
        return products.filter(product => product.disabled === false).length
    }

    const getProductsValue = () => {
        return products.filter(product => product.disabled === false).map(product => (product.price * product.quantity)).reduce((a, b) => a + b, 0);
    }

    const getOutOfStocksCount = () => {
        const x= products.filter(product => product.quantity === 0);
        return x.length
    }

    const getCategoryCount = () => {
        return (new Set(products.filter(product => product.disabled === false).map(product => product.category))).size;
    }


    const totalProductsInfo = {
        total: getProductsCount(),
        totalValue:getProductsValue(),
        outOfStocksCount: getOutOfStocksCount(),
        categoryCount: getCategoryCount()
    };

    return (
        <>
        <div className={styles.inventoryHeading}>
            <span>
                Inventory Stats
            </span>
        </div>
        <InformationCards productsInfo={totalProductsInfo} />
        <ProductsTable productState={[products, setProductsData]}/>
        </>
    )
}

export default Dashboard;