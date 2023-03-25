import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../MovieCard";

const Home = () => {
    const [nowPlaying, setNowPlaying] = useState([])

    const getNowPlaying = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await res
        setNowPlaying(data.results)
    }
    useEffect(() => {
        getNowPlaying()
    }, [])


    return (
        <div className="container">
            <div className='movies row'>
                    {
                        nowPlaying.map(el => <MovieCard el={el}/>)
                    }
            </div>
        </div>
    );
};

export default Home;