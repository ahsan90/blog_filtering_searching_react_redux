import { SEARCH_BY_TITLE, CLEAR_SEARCH, RESET_SEARCH } from "./actionTypes";

export const search_by_title = (title) => {
    return {
        type: SEARCH_BY_TITLE,
        payload: title
    }
}

export const clear_search = (isClear) => {
    return {
        type: CLEAR_SEARCH,
        payload: isClear
    }
}

export const reset_search = () => {
    return {
        type: RESET_SEARCH
    }
}