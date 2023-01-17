
import { SEARCH_BY_TITLE, CLEAR_SEARCH, RESET_SEARCH } from "./actionTypes";

const initialState = {
    title: '',
    isCleared: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_TITLE:
            return {
                ...state,
                isCleared: false,
                title: action.payload
            }

        case CLEAR_SEARCH: 
            return {
                ...state,
                isCleared: action.payload
            }

        case RESET_SEARCH:
            return initialState
    
        default:
            return state;
    }
}

export default searchReducer