import React, {useEffect, useMemo, useRef, useState} from 'react'
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/loader";
import PostList from "../components/PostList";
import Pagin from "../components/UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts]=useState([]);
    const [filter, setFilter]=useState({query:''})
    const [totalPages, setTotalPages]=useState(0);
    const [limit, setLimit]=useState(9);
    const [page, setPage]=useState(1);
    const SearchedPosts=usePosts(posts,filter.query);



    const [fetchPosts,isPostsLoading,postError]=useFetching(async()=>{
        const response=await PostService.getCompetitions();
        setPosts(response.data.competitions)
        const totalCount=response.data.count
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        fetchPosts();
    },[])

    useEffect(()=>{
        setTotalPages(getPageCount(pageCount(),limit))
    },[filter.query])

    const lastLigIndex=page*limit;
    const firstLigIndex=lastLigIndex-limit;
    const currentLig=SearchedPosts.slice(firstLigIndex,lastLigIndex);


    const pageCount=()=>{

        const count=SearchedPosts.map((searchPosts,index)=>index)
        const result= Math.max.apply(null, count)
        return result
    }

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
