import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Detail(props) {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        // axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        // .then((response) => setCharacter(response.data))





        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({ detailId });
    }, [detailId]);

    return (
        <div>
            <div className={styles.div}>
            <Link to="/home">
                <button className={styles.button}>Go Back</button>
            </Link>
            </div>
            <div className={styles.container}>
                <h1>{character.name}</h1>
                <h4>{character.status}</h4>
                <h4>{character.species}</h4>
                <h4>{character.gender}</h4>
                {character.origin && <h4> {character.origin?.name}</h4>}
                <img className={styles.image} src={character.image} alt={character.name} />
            </div>
        </div>
    )
}