import React, {useEffect, useState} from 'react'
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/loader";
import PostList from "../components/PostList";
import Pagin from "../components/UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts]=useState([]);//массив лиг
    const [filter, setFilter]=useState({query:''})//значение в поисковой строке
    const [totalPages, setTotalPages]=useState(0);//Кол-во страниц
    const [limit, setLimit]=useState(9);//Лимит элементов на одной странице
    const [page, setPage]=useState(1);//Текущая страница
    const SearchedPosts=usePosts(posts,filter.query); //Массив отфильрованных лиг


    /*Получаем список, устанавливаем его в массив, получаем общее кол-во элементов
    и пушим это кол-во в функцию для подсчёта страниц */
    const [fetchPosts,isPostsLoading,postError]=useFetching(async()=>{
        const response=await PostService.getCompetitions();
        setPosts(response.data.competitions)
        const totalCount=response.data.count
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        fetchPosts();
    },[])

    //Изменяем кол-во страниц в пагинации при использовании поисковой строки (если изменилось кол-во элементов)
    useEffect(()=>{
        setTotalPages(getPageCount(pageCount(),limit))
    },[filter.query])

    //Считаем массив элементов на одной странице исходя из лимита
    const lastLigIndex=page*limit;
    const firstLigIndex=lastLigIndex-limit;
    const currentLig=SearchedPosts.slice(firstLigIndex,lastLigIndex);

    //Получаем кол-во элементов после поискового запроса
    const pageCount=()=>{
        const count=SearchedPosts.map((searchPosts,index)=>index)
        const result= Math.max.apply(null, count)
        return result;
    }

    //Изменяем состояние активной страницы
    const changePage=(page)=>{
        setPage(page)
    }

    return (
        <div className="App">
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
                ? <div style={{display:'flex',justifyContent:'center', marginTop:50}}><Loader/></div>
                :<PostList posts={currentLig} title="Лиги"/>

            }
            <Pagin
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
