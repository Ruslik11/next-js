import Heading from "./Heading";
import {FC} from "react";
import {postType} from "../types";

type postInfoProps = {
    post: postType
}

const PostInfo:FC<postInfoProps> = ({ post }) => {
    const { title, body } = post || {}

    if (!post) {
        return <Heading tag={'h3'} text={'Empty post'} />
    }

    return (
        <>
            <Heading tag={'h3'} text={title} />
            <div>
                <strong>Body: </strong>
                {body}
            </div>
        </>
    )
}

export default PostInfo