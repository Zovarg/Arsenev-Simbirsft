import React from 'react'
import {Col, Row} from 'react-bootstrap'

//Создание отдельных элементов матчей
const LigaIdItem = (props) => {

    const dateArr=props.post.utcDate.split('T')

    return (

           <Row className="matches__content">
               <Col xs="auto" sm={2} md={2} lg={1}>{dateArr[0].split('-').reverse().join('-')}</Col>
               <Col xs="auto" sm={1} md={1}>{dateArr[1].slice(0,5)}</Col>
               <Col xs="auto" sm={2} md={2} >{props.post.status}</Col>
               <Col xs="auto" sm={2} md={2} lg="3">{props.post.homeTeam.name}</Col>
               <Col >-</Col>
               <Col xs="auto" sm={2} md={2}>{props.post.awayTeam.name}</Col>
               <Col xs="auto" sm={2} md={2}> {props.post.score.fullTime.homeTeam}:{props.post.score.fullTime.awayTeam} {props.post.score.extraTime.homeTeam}:{props.post.score.extraTime.awayTeam}  {props.post.score.penalties.homeTeam}:{props.post.score.penalties.awayTeam}</Col>
         </Row>

    )
}

export default LigaIdItem