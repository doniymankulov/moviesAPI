import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";

const Video = ({movieId}) => {

    const [video, setVideo] = useState([])

    const getVideo = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        await setVideo(data.results)
    }

    useEffect(() => {
        getVideo()
    },[])

    console.log(video)
    return (
        <div className="d-flex justify-content-between flex-wrap align-items-center">
            {
                video.map(el => (
                    <div>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen/>
                    </div>
                ))
            }
        </div>
    );
};

export default Video;