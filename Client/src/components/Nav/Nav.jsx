import React from "react";
import { NavLink } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
    return (
        <div className={styles.container}>
            <NavLink to="/home" 
                className={({ isActive }) => (isActive ? styles.active : styles.disable)}>
                    Inicio
            </NavLink>
            <NavLink to="/favorites" 
                className={({ isActive }) => (isActive ? styles.active : styles.disable)}>
                    Favorites
            </NavLink>
            <NavLink to="/about" 
                className={({ isActive }) => (isActive ? styles.active : styles.disable)}>
                    Acerca de Mi
            </NavLink>
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)}
        />
        </div>
    )   
}