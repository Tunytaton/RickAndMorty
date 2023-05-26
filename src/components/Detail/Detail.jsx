import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props){
    const { detailId } = useParams()
    const [character, setCharacter] = useState({});

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if(char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({detailId});
}, [detailId]);

    return (
        <div>
            <Link  to="/home">
                <button>Go Back</button>
            </Link>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <h4>{character.status}</h4>
            <h4>{character.species}</h4>
            <h4>{character.gender}</h4>
            <img src={character.image} alt={character.name} />
            {character.origin && <h4> {character.origin.name}</h4>}
        </div>
    )
}