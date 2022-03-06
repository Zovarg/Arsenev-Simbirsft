import React from 'react'
import {Container} from 'react-bootstrap'
import cl from './MyDate.module.css'
const MyDate = ({date, setDate}) => {
    const sortedPosts=(sort)=>{
        setDate(sort)
    }
    return (
        <Container>
            <h2>Матчи</h2>
            <div className={cl.dateInput}>
                <div>
                    c <input type="date" id="start" name="trip-start"
                             onChange={e=>sortedPosts({...date,start:e.target.value})}
                             value={date.start}
                             min="2000-01-01" max="2022-12-31"/>
                </div>
                <div>
                    &nbsp;по&nbsp;<input type="date" id="start" name="trip-end"
                                         onChange={e=>sortedPosts({...date,end:e.target.value})}
                                         value={date.end}
                                         min="2000-01-01" max="2022-12-31"/>
                </div>
            </div>
        </Container>
    )
}

export default MyDate