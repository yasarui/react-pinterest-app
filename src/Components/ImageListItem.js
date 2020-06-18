import React from 'react';

const ImageListItem = ({image}) => {
    return(
      <div className="card">
         <div className="image">
            <img src={image.urls.thumb} alt={image.alt_description} />
         </div>
         <div className="content">
            <div className="header">{image.alt_description}</div>
            <div className="description">
               {image.description}
            </div>
         </div>
      </div>
    )
}

export default ImageListItem;