import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response)=>response.json)
        .then((data)=> {
            data.name ? setCharacter(data) : alert("No se encontro el personaje")
        })
        .catch((error)=>{
            console.log(error)
            alert("Algo Falló, por favor revise la consola o contacte con el desarrollador del sitio")
        })
    },[])
console.log(character)

    return (
        <div>
            <h1>Nombre: {props.name}</h1>
        </div>
    )
}