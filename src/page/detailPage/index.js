import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Slider from "react-slick";
import user from "./../../assets/img/user.png"
import Video from "../../components/video/video";

const Index = () => {

    const {id} = useParams()
    // console.log(params)
    const [details, setDetails] = useState({})
    const [cast, setCast] = useState([])

    const getDetails = async () => {
        try {
            const link = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=ru-RU `)
            const {data} = await link
            await setDetails(data)
        } catch (e) {
            console.log(e, "error")
        }
    }
    console.log(details)

    const getCast = async () => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
            const {data} = await url
            await setCast(data.cast)

        } catch (e) {
            console.log(e, "error")
        }
    }

    console.log(cast)

    useEffect(() => {
        getDetails()
        getCast()
    }, [])


    let settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div style={{
                padding: "95px 0",
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}") no-repeat center/cover`,
                color: "white",
            }}>
                <div className="container">
                    <div className="d-flex justify-content-around">
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${details.poster_path}`} alt=""
                             width={300} className="poster-img"/>
                        <div className="w-50 square">
                            <h1>{details.title}</h1>
                            <div className="circle my-3">
                                <p>{Math.floor(details.vote_average)}</p>
                            </div>
                            <h3> release date: {details.release_date}</h3>
                            <h4 className="my-3">{Math.floor(details.runtime / 60)}h {details.runtime % 60}min</h4>
                            <p>{details.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <Slider {...settings}>
                        {
                            cast.map(el => (
                                <div className="my-5 text-center">
                                   <div className="border border-secondary px-2 mx-3 border-3 rounded"
                                   style={{height:"300px"}}
                                   >
                                       {
                                           el.profile_path ? <img
                                                   src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                                   alt=""/> :
                                               <img src={user} alt="" style={{width: "138px", height: "175px",objectFit:"contain"}}/>
                                       }
                                       <h6>name:  {el.name}</h6>
                                       <p style={{ textAlign:"center"}}>characters:   {el.character}</p>
                                   </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

            <div className="container">
                <Video movieId={id}/>
            </div>
        </>
    );
};

export default Index;