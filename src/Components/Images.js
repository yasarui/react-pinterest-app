import React from 'react';
import ImageListItem from './ImageListItem';

const Images = ({images}) => {
   return(
      <div className="ui link cards">
        {images.map((image,index)=>{
           return <ImageListItem image={image} key={index} />
        })}
      </div>
   )
}

export default Images;