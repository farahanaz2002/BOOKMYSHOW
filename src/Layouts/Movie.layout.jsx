import axios from 'axios';
import React ,{useEffect,useContext} from 'react';
import {useParams} from "react-router-dom"
//components
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
//context
import {MovieContext} from "../Context/Movie.Context";

const MovieLayout = (props) => {
    const {id}=useParams();
    const {movie ,setMovie }= useContext(MovieContext);
useEffect(()=>{
    const requestMovie= async ()=>{
        const getMovieData=await axios.get(`/movie/${id}`);
        setMovie(getMovieData.data);

    };
    requestMovie();
},[] );
    return (
        <>
              <MovieNavbar/>
              {props.children}
        </>
    );
};

export default MovieLayout;
