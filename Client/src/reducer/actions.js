export const ADD_FAVORITES = "ADD_FAVORITES";
export const DEL_FAVORITES = "DEL_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER"


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

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}