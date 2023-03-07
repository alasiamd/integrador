export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={() => props.onSearch('HOLA MUNDO!!!')}>Agregar</button>
      </div>
   );
}
