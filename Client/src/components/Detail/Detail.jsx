import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    const regresar = useNavigate();
    
    useEffect(()=>{
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
        .then((response)=>response.json())
        .then((data)=> {
            data.name ? setCharacter(data) : alert("No se encontro el personaje")
        })
        .catch((error)=>{
            console.log(error)
            alert("Algo Falló, por favor revise la consola o contacte con el desarrollador del sitio")
        })
    }, [detailId])

    return (
        <div className={styles.container}>
            <button onClick={()=>regresar(-1)}>Regresar</button>
            <img src={character.image} alt="" />
            <div>
                <h1>Nombre: {character.name}</h1>
                <h1>Status: {character.status}</h1>
                <h1>Specie: {character.species}</h1>
                <h1>Gender: {character.gender}</h1>
                <h1>Origin: {character.origin?.name}</h1>
            </div>
            
        </div>
        
    )
}