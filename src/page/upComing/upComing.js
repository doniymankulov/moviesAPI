import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../MovieCard";

const UpComing = () => {
    const [page, setPage] = useState(1)
    const [upComing, setUpComing] = useState([])

    const getUpComing = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=${page}`)
        const {data} = await res
        setUpComing(data.results)
    }
    useEffect(() => {
        getUpComing()
    }, [page])

    console.log()

    return (
        <div className="container">
            <div className='movies row'>
                {
                    upComing.map(el => <MovieCard el={el}/>)
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

export default UpComing;