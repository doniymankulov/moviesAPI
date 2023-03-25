import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../MovieCard";

const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await res
        setPopular(data.results)
    }
    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div className="container">
            <div className='movies row'>
                {
                    popular.map(el => <MovieCard el={el}/> )
                }
            </div>
        </div>
    );
};

export default Popular;