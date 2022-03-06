import React from 'react'
import {Container} from 'react-bootstrap'
import cl from './Pagination.module.css'
import {Pagination} from '@mui/material'

const Pagin = ({totalPages,page,changePage}) => {
    return (
        <Container>
            <div className={cl.page} >
                {(totalPages!==0) && (totalPages!==-Infinity) && (
                  <Pagination
                    boundaryCount={0}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    count={totalPages}
                    page={page}
                    onChange={(_,num)=>changePage(num)}
                  />
                )}
            </div>
        </Container>
    )
}

export default Pagin