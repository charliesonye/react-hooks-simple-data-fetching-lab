import React, {useState} from "react";

function Images(dogImgs){

const imgs= dogImgs.map( dogImg => {
    let dogImages= dogImg.src
    
    return ( 
        <img src={dogImages} alt="A Random Dog"/>
    )
})

    return(
        {imgs}
    )

}

export default Images;