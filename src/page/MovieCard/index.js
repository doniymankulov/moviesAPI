import React from 'react';
import { NavLink } from "react-router-dom"

const MovieCard = ({el}) => {
    return (
        <div className='col-3 my-4 border border-dark-subtle d-flex justify-content-center flex-column align-items-center'>
          <NavLink to={`/top-rated/rated-info/${el.id}`}>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
          </NavLink>
           <div className="d-flex justify-content-between align-items-center w-100">
               <h6>{el.title}</h6>
               <h5>{el.vote_average}</h5>
           </div>
        </div>
    );
};

export default MovieCard;