import Teams from '../pages/Teams'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import TeamsIdPage from '../pages/TeamsIdPage'


export const routes=[
    {path:'/teams', element: <Teams/>, exact:true},
    {path:'/teams/:id', element: <TeamsIdPage/>, exact:true},
    {path:'/posts', element: <Posts/>, exact:true},
    {path:'/posts/:id', element: <PostIdPage/>, exact:true}
]

