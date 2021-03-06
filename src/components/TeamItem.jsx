import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom'

//Создание отдельных элементов(команд)
const TeamItem = (props) => {
    const router= useNavigate()
    return (

            <div className="post__content">
                <strong> {props.team.name}</strong>
                <div>
                   <img alt="Логотип" style={{width:"50px",height:"50px"}} src={props.team.crestUrl}/>
                </div>
                <MyButton onClick={()=>router(`/teams/${props.team.id}`)}>
                    Открыть
                </MyButton>
            </div>
    )
}

export default TeamItem