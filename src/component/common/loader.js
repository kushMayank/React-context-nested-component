import React from 'react';
import Wrapper from '../wrapper'
import ChildWrapper from '../childWrapper'

const Loader = (props) => {
console.log("props in loader", props);
return <>

<div className="loader"/>
<Wrapper scope="wrapperscope">
    <ChildWrapper scope="childwrapperscope"/>
</Wrapper>
</>}


export default Loader;