export const ADD_FAVORITES = "ADD_FAVORITES";
export const DEL_FAVORITES = "DEL_FAVORITES";

export const add_favorites = (character) => {
    return {
        type: ADD_FAVORITES,
        payload: character,
    }
}

export const del_favorites = (id) => {
    return {
        type: DEL_FAVORITES,
        payload: id,
    }
}