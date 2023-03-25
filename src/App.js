import './App.css';
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/home/home";
import Popular from "./page/popular/popular";
import TopRated from "./page/topRated/index";
import DetailPage from "./page/detailPage";
import UpComing from "./page/upComing/upComing";
// setItem(key,value) -
// getItem(key) -
// removeItem(key) -

// JSON.parse -
// JSON.stringify -

function App() {

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode') || false))

    const changeThem = (mode) => {
        setMode(!mode)
        localStorage.setItem('mode', JSON.stringify(!mode))
    }

    return (
        <div style={{
            background: mode ? "black" : "",
            color: mode ? "white" : "",
            transition:".7s"
        }}>
            <Header changeThem={changeThem}/>
             <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/top-rated"} element={<TopRated/>}/>
                <Route path={"/top-rated/rated-info/:id"} element={<DetailPage/>}/>
                 <Route path={"/up-coming"} element={<UpComing/>} />
             </Routes>
            <Footer/>
        </div>
    );
}

export default App;
