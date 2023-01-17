import { GET_POSTS, GET_POSTS_BY_AUTHOR, GET_POSTS_BY_CATEGORY, CLEAR_FILTERS } from './actionTypes'

import postsList from './initialState'


const initialState = postsList

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return state

        case GET_POSTS_BY_AUTHOR:
            return state.filter(post => post.authorName === action.payload)

        case GET_POSTS_BY_CATEGORY:
            return state.filter(post => post.category === action.payload)

        case CLEAR_FILTERS:
            return state

        default:
            return state
    }
}

export default postReducer