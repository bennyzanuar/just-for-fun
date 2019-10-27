import React from 'react';

const ImageComp = ({id, data}) => {
    return(
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={data.name} />
    );
};

export default ImageComp;