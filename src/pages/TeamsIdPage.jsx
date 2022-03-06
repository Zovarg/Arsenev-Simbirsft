import React, {useEffect, useState} from 'react'
import {useFetching} from '../hooks/useFetching'
import PostService from '../API/PostService'
import {getPageCount} from '../utils/pages'
import Loader from '../components/UI/Loader/loader'
import Pagin from '../components/UI/pagination/Pagination'
import {Link, useParams} from 'react-router-dom'
import LigaIdList from '../components/LigaIdList'
import {Container} from 'react-bootstrap'
import MyDate from '../components/UI/date/MyDate'

function PostIdPage() {
    const [posts, setPosts]=useState([]) //массив матчей
    const [totalPages, setTotalPages]=useState(0) //Кол-во страниц
    const [limit, setLimit]=useState(7) //Лимит элементов на одной странице
    const [page, setPage]=useState(1) //Текущая страница
    const [date, setDate]=useState({start:'2021-01-01', end:'2022-03-05'}) //Текущая дата
    const[breadCrumbs, setBreadCrumbs]=useState('') //Хлебные крошки
    const params=useParams() //Получаем текущий айдишник для запроса

    /*Для хлебных крошек делаем запрос ко списку команд, сравниваем текущий айдиник со списком,
     находим соответсвие и вытаскиваем "название"*/
    const [fetchName,isNameLoading,nameError]=useFetching(async(id)=>{
        const responseId=await PostService.getTeams()
        let translat=Number(id)
        responseId.data.teams.map((res)=>{
            if(res.id===translat){
                setBreadCrumbs(res.name)
            }
        })
    })

    useEffect(()=>{
        fetchName(params.id)
    },[])

    //Получаем список матчей и их кол-во
    const [fetchPosts,isPostsLoading,postError]=useFetching(async(id)=>{
        const response=await PostService.getTeamsId(id,date.start,date.end)
        setPosts(response.data.matches)
        const totalCount=response.data.count
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        fetchPosts(params.id)
    },[date])

    //Считаем массив элементов на одной странице исходя из лимита
    const lastLigIndex=page*limit
    const firstLigIndex=lastLigIndex-limit
    const currentLig=posts.slice(firstLigIndex,lastLigIndex)

    //Изменяем состояние активной страницы
    const changePage=(page)=>{
        setPage(page)
    }

    return (
        <div className="App">
            <Container>
                <ul className="breadcrumb">
                    <li><Link to="/teams">Команды</Link></li>
                    <li>{breadCrumbs}</li>
                </ul>
            </Container>
            <MyDate
                setDate={setDate}
                date={date}
            />
            {isPostsLoading
                ? <div style={{display:'flex',justifyContent:'center', marginTop:50}}><Loader/></div>
                :<LigaIdList posts={currentLig} title="Календарь команды пуст..."/>

            }
            <Pagin
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    )
}

export default PostIdPage
