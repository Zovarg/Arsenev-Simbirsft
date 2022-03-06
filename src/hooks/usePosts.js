import {useMemo} from 'react'
/*Хук для поисковой строки*/
export const usePosts=(posts,query)=>{

    const SearchedPosts=useMemo(()=>{
        return posts.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
    },[query, posts])
    return SearchedPosts
}