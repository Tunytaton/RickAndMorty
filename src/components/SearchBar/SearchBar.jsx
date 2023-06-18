import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleChange = e => {
      e.preventDefault();
      const {value} = e.target;
      setCharacter(value);
   }
   return (
      <div className={styles.container}>
         <input type='search' name='search' id='search' placeholder="ID" onChange={handleChange}/>
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
