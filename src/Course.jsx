import React from 'react'

function Course({title, description, image}) {

    return ( 
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <img src={image} alt={description} />
        </div>
     );
}

export default Course;

