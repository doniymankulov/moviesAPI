import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../MovieCard";

const Index = () => {
    const [page, setPage] = useState(1)
    const [nowPlaying, setNowPlaying] = useState([])

    const getNowPlaying = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=ru-Ru&page=${page}`)
        const {data} = await res
        setNowPlaying(data.results)
    }
    useEffect(() => {
        getNowPlaying()
    }, [page])
    return (
        <div className="container">
            <div className='movies row'>
                {
                    nowPlaying.map(el => <MovieCard el={el}/>)
                }
            </div>
            <div className="page-btn">
                <button onClick={() => setPage(page === 1 ? page : page - 1)}>prev</button>
                <p>page: {page}</p>
                <button onClick={() => setPage(page + 1)}>next</button>
            </div>
        </div>
    );
};

export default Index;