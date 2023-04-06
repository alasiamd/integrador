import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";
import { add_favorites, del_favorites } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";

 
export default function Card({ id, name, species, image, gender, onClose }) {
   const dispatch = useDispatch();
   const [isFavorite, setIsFavorite] = useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);

   const handleFavorite = () => {
      if (isFavorite) {
         setIsFavorite(false)
         dispatch(del_favorites(id))
      } else {
         setIsFavorite(true)
         dispatch(add_favorites({ id, name, species, image, gender, onClose }))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFavorite(true);
         }
      });
   }, [myFavorites]);
   return (
      
         <div className={styles.container}>
            <div className={styles.divButton}>
                     {
            isFavorite ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
      <        button onClick={handleFavorite}>🤍</button>
            )
}
            {isFavorite ?  null : (
               <button onClick={() => onClose()}>X</button>
            )}
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
