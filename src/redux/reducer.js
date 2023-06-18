import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: []
}

export default function reducer(
    state = initialState,
    {type, payload}                    //action = { type, payload }
) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [
                    ...state.myFavorites,
                    payload
                ]                
            }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                (fav) => fav.id !== Number(payload)
            )
            return {
                ...state,
                myFavorites: filteredFavs
            }
        case FILTER:
            // extra > caso ALL
            if (payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const allCharactersCopy = [ ...state.allCharacters ];
            const filteredCharacters = allCharactersCopy.filter(
                character => character.gender === payload
            );
            return {
                ...state, 
                myFavorites: filteredCharacters
            }
        case ORDER:
            let orderedCharacters = [];
            if (payload === "A"){
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => a.id - b.id 
                )
            } else if (payload === "D"){
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => b.id - a.id
                )
            }
            return{
                ...state,
                myFavorites: orderedCharacters
            }
        default:
            return { ...state }
    }
}