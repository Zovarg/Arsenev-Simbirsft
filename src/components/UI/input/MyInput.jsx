import React from 'react';
import classes from './MyInput.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup} from "react-bootstrap";
const MyInput = (props) => {
    return (
        <InputGroup className="mb-3">
            <Container className="box">
                <input  className={classes.myInput} {...props}/>
            </Container>
        </InputGroup>





    );
}

export default MyInput;