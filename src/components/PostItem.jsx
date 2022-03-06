import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router= useNavigate()
    return (
                <div className="post__content">
                    <strong> {props.post.name}</strong>
                    <div>
                        {props.post.area.name}
                    </div>
                    <MyButton onClick={()=>router(`/posts/${props.post.id}`)}>
                        Открыть
                    </MyButton>
                </div>
    );
};

export default PostItem;