import React from "react";
import styles from "./Card.module.css";

const Card = ({icon, count, label}) => {
    return (
        <>
           <div className={styles.card}>
            <div className={styles.cardIcon}>
                <img src={icon} />
            </div>
            <div className={styles.cardInformation}>
                <div className="card-label">
                    {label}
                </div>
                <div className={styles.cardCount}>
                    {count.toLocaleString()}
                </div>
            </div>
            </div> 
        </>
    )
}

export default Card;