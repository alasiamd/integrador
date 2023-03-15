import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const { characters } = props;
   return  (
      <div className={styles.container}>
         {characters.map(({ id, name, species, gender, image }) => <Card 
            key={id}
            name = {name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => props.onClose(id)}
         />)}
      </div>
   ) 
}
