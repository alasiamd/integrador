import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return  (
      <div>
         {characters.map(element => <Card 
            name = {element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)}
      </div>
   ) 
}
