import React, {useEffect, useState} from 'react'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import Loader from "../components/UI/Loader/loader";
import {Link, useParams} from "react-router-dom";
import LigaIdList from "../components/LigaIdList";
import {Container} from "react-bootstrap";
import MyDate from "../components/UI/date/MyDate";
import Pagin from "../components/UI/pagination/Pagination";


function PostIdPage() {
    const [posts, setPosts]=useState([]);
    const [totalPages, setTotalPages]=useState(0);
    const [limit, setLimit]=useState(7);
    const [page, setPage]=useState(1);
    const [date, setDate]=useState({start:'2020-01-01', end:'2022-03-05'});
    const[breadCrumbs, setBreadCrumbs]=useState('');
    const params=useParams();

    const [fetchPosts,isPostsLoading,postError]=useFetching(async(id)=>{
        const response=await PostService.getCompetitionsId(id,date.start,date.end);
        setPosts(response.data.matches);
        const totalCount=response.data.count
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        fetchPosts(params.id)
    },[date])

    const [fetchName,isNameLoading,nameError]=useFetching(async(id)=>{
        const responseId=await PostService.getCompetitions();
        let translat=Number(id);
        responseId.data.competitions.map((res)=>{
            if(res.id===translat){
                setBreadCrumbs(res.name)
            }
        })
    })

    useEffect(()=>{
        fetchName(params.id)
    },[])

    const lastLigIndex=page*limit;
    const firstLigIndex=lastLigIndex-limit;
    const currentLig=posts.slice(firstLigIndex,lastLigIndex);

    const changePage=(page)=>{
        setPage(page)
    }

    return (
        <div className="App">
            <Container>
                <ul className="breadcrumb">
                    <li><Link to="/teams">Лиги</Link></li>
                    <li>{breadCrumbs}</li>
                </ul>
            </Container>
            <MyDate
                setDate={setDate}
                date={date}
            />
            {isPostsLoading
                ? <div style={{display:'flex',justifyContent:'center', marginTop:50}}><Loader/></div>
                :<LigaIdList posts={currentLig} title="Календарь лиги пуст..."/>

            }
            <Pagin
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
}

export default PostIdPage;
