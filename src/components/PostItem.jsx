
import image_sources from "../utility/image_source";
import {
    get_post_by_author,
    get_post_by_category,
} from "../redux/post/actions";
import { useDispatch } from "react-redux";


export default function PostItem({ post }) {

    const dispatch = useDispatch()

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.image_url} alt="" />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 hover:underline hover:cursor-pointer">

                            <button
                                onClick={() => dispatch(get_post_by_category(post.category))}
                            >
                                {post.category}
                            </button>

                        </span>
                    </p>

                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>

                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full pointer-events-auto"
                            src={image_sources.get_avatar()}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 hover:underline hover:cursor-pointer hover:text-blue-600/100">

                            <button onClick={() => dispatch(get_post_by_author(post.authorName))}>
                                {post.authorName}
                            </button>

                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            
                            <span> {post.meta} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
