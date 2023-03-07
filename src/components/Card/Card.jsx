import React from "react";
import styled from "styled-components";

const DivCard = styled.div`
background-color: white;
   border: solid cornsilk;
   width:15em;
   height: 17em;
   border-radius: 1em;
`;
const Button = styled.button`
   display: flex;
   margin-left: 16em;

`;

const Image = styled.img`
   width:100%;
   height: 13em;
   border-radius: 1em;
   position: initial;
`

export default function Card(props) {
   return (
      <DivCard>
         <Button onClick={() => props.onClose()}>X</Button>
         <Image  src={props.image} alt="" />
         <h2>{props.name} </h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         
      </DivCard>
   );
}
