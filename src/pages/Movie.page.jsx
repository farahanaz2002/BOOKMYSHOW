import axios from "axios";
import {FaCcVisa,FaCcApplePay} from "react-icons/fa";
import React,{useContext,useState,useEffect}from "react";
//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from "../components/Cast/Cast.component";
import { useParams } from "react-router";
import Slider from "react-slick";
//config
import TempPoster from "../config/TempPoster.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//context
import {MovieContext}from "../Context/Movie.Context";

const Movie = () => {
    const{id}=useParams();
    const{movie} =useContext(MovieContext);
    const [cast,setCast]=useState([]);
    useEffect(()=>{
        const requestCast=async()=>{
            const getCast =await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    });

        const settings={
        infinity:false,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:[{
            breakpoints:1024,
            settings:{
            slidesToShow:3,
                slidesToScroll:3,
                infinite:true,
            },
        },
        {
            breakpoints:600,
            settings:{
             slidesToShow:2,
                slidesToScroll:2,
                InitialSlide:2,
            },
        },
        {
            breakpoints:480,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                
            },
        },
        
        ],
    };
    const settingsCast={
        infinity:false,
        autoplay:false,
        slidesToShow:6,
        slidesToScroll:4,
        InitialSlide:0,
        responsive:[{
            breakpoints:1024,
            settings:{
            slidesToShow:3,
                slidesToScroll:3,
                infinite:true,
            },
        },
        {
            breakpoints:600,
            settings:{
             slidesToShow:2,
                slidesToScroll:2,
                InitialSlide:2,
            },
        },
        {
            breakpoints:480,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                
            },
        },
        
        ],
    };
    

    return (
        <>
        <MovieHero/> 
        <div className=" my-12 container  px-4  lg:ml-20 lg:w-2/3">
            <div className="flex flex-col items-start  gap-3"> 
            <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
        <p> {movie.overview}
            </p>
            </div> 
            <div  className="my-8">
            <hr />
            </div> 
            <div className="my-8">
               <h2 className="text-gray-800 font-bold text-2xl mb-3"> Applicable offers</h2>
             
             <div className="flex flex-col gap-3 lg:flex-row">
                 
                  <div className="flex items-start gap-2 bg-yellow-200 p-3  border-yellow-400 border-dashed border-2 rounded-md">
            <div className="w-8 h-8">  <FaCcVisa  className="w-full h-full"/> </div>
                   <div className="flex flex-col items-start ">
                       <h3 className="text-gray-700 text-xl font-bold"> Visa stream offer </h3>
                       <p className="text-gray-600">
                           Get 50% off upto INR 150 on all Visa cards* on Bookmyshow stream.
                       </p>
                   </div>
                   </div>
                   <div className="flex items-start gap-2 bg-yellow-200 p-3  border-yellow-400 border-dashed border-2 rounded-md">
            <div className="w-8 h-8">  <FaCcApplePay  className="w-full h-full"/> </div>
                   <div className="flex flex-col items-start ">
                       <h3 className="text-gray-700 text-xl font-bold"> Filmy Pass </h3>
                       <p className="text-gray-600">
                           Get Rs.75* off on 3 movies you buy/rent on stream. Buy filmy pass @Rs.99
                           </p>
                   </div>
                   </div>  
                   </div>
                </div>  
       <div className="my-8" >
       <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew </h2>
       <div  className="my-8">
            <hr />
            </div>
        <div className="flex  flex-wrap gap-4 ">
            <Slider{...settingsCast}>
            {cast.map((castdata)=>(
            <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
     castName={castdata.original_name} role={castdata.character} />))};
            </Slider>
        </div>
        </div>
        <div className="my-8">
        <div  className="my-8">
            <hr />
            </div>
        <PosterSlider 
        config={settings}
        images={TempPoster} title="YOU MIGHT ALSO LIKE  " isDark={false}/>

        </div>
        <div className="my-8">
        <div  className="my-8">
            <hr />
            </div>
        <PosterSlider 
        config={settings}
        images={TempPoster} title="BMS XCLUSIVE " isDark={false}/>

        </div>
        </div>         
        </>
    );
};

export default Movie;
 