import { useDispatch, useSelector } from "react-redux";
import { clear_filters } from "../redux/post/actions";
import { clear_search } from "../redux/search/actions";

import PostItem from "./PostItem";

export default function PostList() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const { title } = useSelector((state) => state.search);

    const clearSearchFilters = (isClear) => {
        dispatch(clear_search(isClear));
        dispatch(clear_filters());
    };

    const totalPosts = () => {
        return posts.filter((post) =>
            post.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        );
    };

    return (
        <>
            <div className="flex" style={{ justifyContent: "space-between" }}>
                <p>
                    {totalPosts().length === 1
                        ? "Found 1 result"
                        : totalPosts().length > 1
                            ? `Found ${totalPosts().length} results`
                            : "No result found"}
                </p>
                <button
                    onClick={() => clearSearchFilters(true)}
                    className="bg-blue-500 hover:bg-green-700"
                    style={{ padding: "10px", color: "white", borderRadius: '10px' }}
                >
                    Clear Filter/Search
                </button>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {totalPosts().map(post => (
                    <PostItem post={post} key={post.id} />
                ))}
            </div>
        </>
    )
}
