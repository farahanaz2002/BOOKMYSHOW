import React from "react";
import Slider from "react-slick";

//components 
import Poster from "../poster/poster.component";
//config
import PosterCarouselSettings  from "../../config/PosterCarousel.config";
import PremiereImage from "../../config/TempPoster.config";

 export const Premiere =()=>{
    
    
     return (
         <>
         <div className="flex flex-col items-start">
             <h3 className=" text-white text-xl font-bold"> Premiere</h3>
             <p className="text-white text-sm"> Brand new release every friday</p>
         </div>
         <Slider {...PosterCarouselSettings}>
             {PremiereImage.map((image)=><Poster {...image} isDark/>)}
         </Slider>
         </>
     );
 }; 
 export default Premiere;