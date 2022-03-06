import React from 'react';
import LigaIdItem from "./LigaIdItem";
import {Container} from "react-bootstrap";


const LigaIdList = ({posts, title}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
        )
    }

    return (
        <div>
            <Container className="box">
                {posts.map((post, index)=>
                    <LigaIdItem key={index+1} post={post}/>
                )}
            </Container>
        </div>
    );
};

export default LigaIdList;