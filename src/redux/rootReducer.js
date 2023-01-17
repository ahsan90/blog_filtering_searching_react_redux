import { combineReducers } from "redux";
import postReducer from "./post/postReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    search: searchReducer
})

export default rootReducer