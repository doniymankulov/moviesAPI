import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Header = ({changeThem}) => {

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode') || false))

    const fn = (mode) => {
        changeThem(mode)
        setMode(!mode)
    }

    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light py-3">
            <div className="container">
                <a className="navbar-brand" href="#">MOVIE TV</a>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/popular"} className="nav-link" href="#">Popular</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/top-rated"} className="nav-link" href="#">Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/up-coming"} className="nav-link" href="#">Up Coming</NavLink>
                        </li>
                    </ul>
                    <button className="dark-mode" onClick={() => fn(mode)}>dark mode</button>
                    <form onSubmit={(e) => e.preventDefault()} className="form-inline my-2 my-lg-0 d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;