  
import React from 'react'

const Image = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} id={props.id}  onClick={(event) => props.click(event, props.id, props.clicked)}   width={180} height={180}/>
        </div>
    )
};

export default Image;