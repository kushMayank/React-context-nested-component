import React from 'react';

const Wrapper = (props)=>{
    console.log("props in wrapper", props)
    return <><h1>Wrapper
        
        {props.children}
        </h1></>
}
export default Wrapper