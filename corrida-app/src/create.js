import React from "react";



const Create = (props) =>{ <button onClick={props.onClick}>{props.more}</button>
    return(
        <button>{props.missed}</button>
    )
}



export default Create