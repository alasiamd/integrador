import React from "react";
// import styled from "styled-components";

import styles from "./Card.module.css";

// const Button = styled.button`
 
export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.divButton}>
            <button onClick={() => props.onClose()}>X</button>
         </div>
         <div className={styles.divImg}>
            <img  src={props.image} alt="" />
            <h2 className={styles.name} >{props.name} </h2>
         </div>
         <div className={styles.divGS}>
         <h2 className={styles.gs}>{props.species}</h2>
         <h2 className={styles.gs}>{props.gender}</h2>
         </div>
         
         
      </div>
   );
}
