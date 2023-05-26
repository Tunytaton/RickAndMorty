import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose} >X</button>
         </div>
            <div className={styles.dataContainer}>
               <h2>{props.name}</h2>
            </div>
         <Link to={`/detail/${props.id}`}>
         <img className={styles.image} src={props.image} alt={props.name} />
         </Link>
      </div>
   );
};

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character) => dispatch(AddFAV(character)),
//       removeFav: (id) =>dispatch(removeFav)
//    }
// } 
