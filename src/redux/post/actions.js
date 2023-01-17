import { GET_POSTS, GET_POSTS_BY_AUTHOR, GET_POSTS_BY_CATEGORY, CLEAR_FILTERS } from './actionTypes'


export const  get_posts = () => {
  return {
    type: GET_POSTS
  }
}

export const get_post_by_author = (authoName) => {
    return {
        type: GET_POSTS_BY_AUTHOR,
        payload: authoName
    }
}

export const get_post_by_category = (category) => {
    return {
        type: GET_POSTS_BY_CATEGORY,
        payload: category
    }
}

export const clear_filters = () => {
    return {
        type: CLEAR_FILTERS
    }
} 


