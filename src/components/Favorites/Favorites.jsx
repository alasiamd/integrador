import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

export default function Favorites () {
    const myFavorites = useSelector((state) => state.myFavorites);
    console.log(myFavorites)
    
    return (
        <div className={styles.container}>
            {myFavorites?.map((myFavorites) => (
                <Card {...myFavorites} />
            ) )}
        </div>
    )
}