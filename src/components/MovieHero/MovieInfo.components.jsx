import React,{useContext} from "react";
import { MovieContext } from "../../Context/Movie.Context";
//context

const MovieInfo = () => {
    const { movie } = useContext(MovieContext);
    const genres=movie.genres?.map(({name})=>name).join(" , ");
    return (
        <>
        <div className=" flex flex-col gap-3 lg:gap-8"> 
            <div className="flex items-center gap-3 md:px-4 ">
                <div className ="w-40 h-8">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className="w-full h-full" />
                </div>
                <span className="  bg-bms-700 p-1 text-xs text-white rounded-md "> Streaming now </span>
            </div>
            <h1 className=" hidden lg:block text-white lg:text-5xl font-bold "> {movie.original_title}</h1>
            <div className="flex flex-col-reverse  gap-2  lg: gap-5 lg:flex-col" >
            <div className="text-white font-light flex flex-col gap-3 md:px-4">
                <h4> 4k &bull; {movie.original_language} &bull;Action </h4>
                <h4> {(movie.runtime/ 60).toFixed(2)} hr &bull;{genres} &bull;13+ </h4>
                
            </div >
            <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                <button className="bg-red-600 w-full  py-3 text-white font-semibold rounded-lg ">RENT  ₹149 </button>
                <button className="bg-red-600 w-full  py-3 text-white font-semibold rounded-lg ">BUY  ₹689 </button>
            </div>
        </div>
        </div>
            
        </>
    );
};

export default MovieInfo;
