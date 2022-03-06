import React from 'react';
import {Container} from "react-bootstrap";

const Error = () => {
    return (
        <div>
            <h2 style={{color:'red'}}>
                <Container>
                    Ошибка 404: вы перешли на несущетсвующую страницу
                </Container>
            </h2>
        </div>
    );
};

export default Error;