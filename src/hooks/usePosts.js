import {useMemo} from "react";

export const usePosts=(posts,query)=>{

    const sortedAndSearchedPosts=useMemo(()=>{
        return posts.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
    },[query, posts])
    return sortedAndSearchedPosts;
}