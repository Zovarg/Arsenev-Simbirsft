import React from 'react';
import PostItem from "./PostItem";
import {Container} from "react-bootstrap";

//Создаём общего список лиг с помощью PostItem
const PostList = ({posts}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Лиги не найдены!
            </h1>
        )
    }

    return (
        <Container className="box">
        <div className="list">
            {posts.map((post, index)=>
                <PostItem key={index+1} post={post}/>
            )}
        </div>
        </Container>
    );
};

export default PostList;