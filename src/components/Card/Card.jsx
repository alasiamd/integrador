import React from "react";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

 
export default function Card({ id, name, species, image, gender, onClose }) {
   return (
      
         <div className={styles.container}>
            <div className={styles.divButton}>
               <button onClick={() => onClose()}>X</button>
            </div>
            <Link to={`/detail/${id}`}>
            <div className={styles.divImg}>
               <img  src={image} alt="" />
               <h2 className={styles.name} >{name} </h2>
            </div>
            <div className={styles.divGS}>
               <h2 className={styles.gs}>{species}</h2>
               <h2 className={styles.gs}>{gender}</h2>
            </div> 
            </Link>                
         </div>
      
      
   );
}
