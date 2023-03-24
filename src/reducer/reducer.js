import { ADD_FAVORITES, DEL_FAVORITES } from "./actions";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites:[
                    ...state.myFavorites,
                    actions.payload
                ]
            };
        case DEL_FAVORITES:
            const filtered = state.myFavorites.filter((character) => 
                character.id !== actions.payload
            )
            return {
                ...state,
                myFavorites: filtered
            }
        default:
            return {...state};
    }
}

export default reducer;