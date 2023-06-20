import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleChange = e => {
      e.preventDefault();
      const { value } = e.target;
      setCharacter(value);
   }

   const numRandom = () => {
      const random = Math.floor(Math.random() * 500) + 1;
      props.onSearch(random);
   }

   const handleSearch = () => {
      props.onSearch(character);
      setCharacter("");
   }

   return (
      <div className={styles.container}>
         <button className={styles.random} onClick={numRandom}>Random</button>
         <input type='search' name='search' id='search' placeholder="ID" value={character} onChange={handleChange} />
         <button className={styles.button} onClick={handleSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;