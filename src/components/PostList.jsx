import { useDispatch, useSelector } from "react-redux";

import PostItem from "./PostItem";

export default function PostList() {
    const posts = useSelector(state => state.posts)
    console.log(posts)

    return (
        <>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map(post => (
                    <PostItem post={post} key={post.id} />
                ))}
            </div>
        </>
    )
}
