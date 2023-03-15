import React from "react";
import { NavLink } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
    return (
        <div className={styles.container}>
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)}
        />
        </div>
    )   
}