import React from "react";
import cart from "../../resources/cart.png";
import category from "../../resources/category.png";
import outOfStock from "../../resources/out-of-stock.png";
import money from "../../resources/money.png";
import Card from "../Card/Card";
import styles from "./InformationCards.module.css";

const InformationCards = ({productsInfo}) => {

    return (
        <>
            <div className={styles.cards}>
                <Card icon={cart} count={productsInfo.total} label={"Total Products"} />
                <Card icon={money} count={productsInfo.totalValue} label={"Total Store Value"} />
                <Card icon={outOfStock} count={productsInfo.outOfStocksCount} label={"Out of Stocks"} />
                <Card icon={category} count={productsInfo.categoryCount} label={"No of Category"} />
            </div>

        </>
    );
}

export default InformationCards;