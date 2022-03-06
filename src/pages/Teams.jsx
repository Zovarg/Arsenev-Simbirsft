import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/loader";
import Pagin from "../components/UI/pagination/Pagination";
import TeamList from "../components/TeamList";


const Teams = () => {
    const [teams, setTeams]=useState([]);
    const [filter, setFilter]=useState({query:''})
    const [totalPages, setTotalPages]=useState(0);
    const [limit, setLimit]=useState(9);
    const [page, setPage]=useState(1);
    const SearchedTeams=usePosts(teams,filter.query);



    const [fetchPosts,isPostsLoading,postError]=useFetching(async()=>{
        const response=await PostService.getTeams();
        setTeams(response.data.teams)
        const totalCount=response.data.count
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        fetchPosts();
    },[])

    const lastLigIndex=page*limit;
    const firstLigIndex=lastLigIndex-limit;
    const currentLig=SearchedTeams.slice(firstLigIndex,lastLigIndex);

    const changePage=(page)=>{
        setPage(page)
    }

    return (
        <div className="App">
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display:'flex',justifyContent:'center', marginTop:50}}><Loader/></div>
                :<TeamList posts={currentLig}/>

            }
            <Pagin
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
};

export default Teams;