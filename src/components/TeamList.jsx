import React from 'react';
import TeamItem from "./TeamItem";
import {Container} from "react-bootstrap";

const TeamList = ({posts}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Команды не найдены!
            </h1>
        )
    }

    return (
        <div>
            <Container className="box">
                <div className="list">
                {posts.map((post, index)=>
                    <TeamItem key={index+1} team={post}/>
                )}
                </div>
            </Container>
        </div>
    );
};

export default TeamList;