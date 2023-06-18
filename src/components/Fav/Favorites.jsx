import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites);

    return (
        <div className={styles.conteiner}>
            {favorites.map((character) => {
                return (<Card
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    // status={character.status}
                    // species={character.species}
                    // gender={character.gender}
                    // origin={character.origin?.name}
                    image={character.image}
                />
                )
            })}

        </div>
    )
};


export default Favorites;