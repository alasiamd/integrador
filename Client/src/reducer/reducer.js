import { ADD_FAVORITES, DEL_FAVORITES, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                allCharacters:[
                    ...state.allCharacters,
                    actions.payload
                ],
                myFavorites:[
                    ...state.allCharacters,
                    actions.payload
                ]
            };
        case DEL_FAVORITES:
            const filtered = state.allCharacters.filter((character) => 
                character.id !== actions.payload
            )
            return {
                ...state,
                myFavorites: filtered,
                allCharacters: filtered
            };
        case FILTER:
            const filterByGender = [...state.allCharacters].filter((char) => 
                char.gender === actions.payload)
            return{
                ...state,
                myFavorites: filterByGender,
            };
        case ORDER:
            const filterByOrder = [...state.allCharacters].sort((a, b) => {               
                if (actions.payload === "Ascendente"){
                    return a.id > b.id ? 1 : -1;
                }
                else {
                    return a.id < b.id ? 1 : -1;
                }
            })
            return{
                ...state,
                myFavorites: filterByOrder,
            }
        default:
            return {...state};
    }
}

export default reducer;