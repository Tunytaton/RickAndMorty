import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
   return (
      <div>
         <div className={styles.container}>
         <NavLink to="/about">
            <button className={styles.button}>About</button>
         </NavLink>
         <NavLink to="/home">
            <button className={styles.button}>Home</button>
         </NavLink>
         <NavLink to="/favorites">
            <button className={styles.button}>Favorites</button>
         </NavLink>
         </div>
        <SearchBar onSearch={props.onSearch} />
      </div>
   );
}