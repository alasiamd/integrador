import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { orderCards, filterCards } from "../../reducer/actions";

export default function Favorites () {
    const myFavorites = useSelector((state) => state.myFavorites);
    console.log(myFavorites)
    const dispatch = useDispatch();
    const handleClick = (e) => {
        const { name, value } = e.target
        switch (name) {
            case "order": 
                dispatch(orderCards(value))
                break;
            case "filter":
                dispatch(filterCards(value))
                break;
            default:
                break;
        }
    }
    
    return (
        <div className={styles.container}>
            <div>
                <select name="order" onChange={handleClick}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onChange={handleClick}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderleess">Genderleess</option>
                    <option value="unknow">unknow</option>
                </select>
            </div>
            {myFavorites?.map((myFavorites) => (
                <Card {...myFavorites} />
            ) )}
        </div>
    )
}