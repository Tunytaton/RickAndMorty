import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";


function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image });
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         <div className={styles.displayButtons}>
            {isFav ? (
               <button className={styles.favButton} onClick={handleFavorite}>💗</button>
            ) : (
               <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
            )}
            <div className={styles.buttonContainer}>
               <button onClick={onClose}>X</button>
            </div>
         </div>
         <Link to={`/detail/${id}`}>
            <div className={styles.dataContainer}>
               <h2>{name}</h2>
            </div>
            <img className={styles.image} src={image} alt={name} />
         </Link>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);