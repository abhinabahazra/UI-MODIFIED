import React from "react";
// import { ReactVideo } from "reactjs-media";
import ReactPlayer from 'react-player'
import { Link, useParams, Redirect } from "react-router-dom";

import logo from './digital.png';

const Media = () => {
    let { link, rating } = useParams();
    let movie = decodeURIComponent(link);
    let rate = decodeURIComponent(rating);

    console.log("aaaaaaa", movie)
    //     if(sessionStorage.getItem('auth')){
    //       let {num_master_id} = JSON.parse(sessionStorage.getItem('auth'));
    //       if(num_master_id === '2'){
    //         //history.push("/producer");
    //         console.log("userpage");
    //         return  <Redirect to="/" />
    //       }
    //   }else{
    //       console.log("homepage");
    //    return   <Redirect to="/" />

    //   }
    return (
        <div>
            <h5>{rate}</h5>
            <video   width='100%' height='100%' controls onContextMenu="return false;" controlsList="nodownload" autoplay><source src={`${movie}`} type="video/mp4" /></video>
            <button id="style_button"><Link to={"/"}>Back to home</Link></button>
            <div id="slide_main"></div>
        </div>
    );
};

export default Media;