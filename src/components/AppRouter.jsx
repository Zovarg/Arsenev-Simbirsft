import React from 'react'
import {Route, Routes,Navigate} from 'react-router-dom'
import Posts from '../pages/Posts'
import {routes} from '../router'
import Error from '../pages/Error'
//Настраиваем роутинг
const AppRouter = () => {
    return (

            <Routes>
                <Route path="/" element={<Posts/>} />
                {routes.map(route=>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route path="/not-found-404" element={<Error />} />
                <Route path="*" element={<Navigate to="/not-found-404" />} />
            </Routes>

    )
}

export default AppRouter