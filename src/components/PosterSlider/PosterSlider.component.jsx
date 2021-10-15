import React from 'react'
//component
import Poster from "../poster/poster.component";

//config
import PosterCarouselSettings  from "../../config/PosterCarousel.config";
import Slider from 'react-slick';

export const PosterSlider = (props) => {
    const SliderConfig =props.config ? props.config: PosterCarouselSettings
    return (
        <>
         <div className="flex flex-col items-start my-2">
             <h3 className={` text-2xl font-bold ${props.isDark? "text-white":"text-gray-700"}`}> {props.title}</h3>
             <p className={` text-sm${props.isDark? "text-white":"text-gray-700"}`}> {props.subtitle}</p>
         </div>
         <Slider {...SliderConfig}>
             {props.images.map((image)=><Poster {...image} isDark={props.isDark}/>)}
         </Slider>
            
        </>
    );
};
export default PosterSlider;