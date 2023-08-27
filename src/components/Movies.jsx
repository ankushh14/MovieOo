import React, { useEffect, useState } from 'react';
import Moviecards from './cards/Moviecards';

export default function Movies(){
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const res = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies",{method:"GET"});
        const data = await res.json();
        setMovies(data);
    }
    return(
        <div className="main-movie-div w-full flex flex-wrap">
            {
                movies.slice(0,-1).map((item,index)=>{
                    return <Moviecards Title={item.Title} Poster={item.Poster} Year={item.Year} Runtime={item.Runtime}/>
                })
            }
        </div>
    )
};