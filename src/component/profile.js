import React, {useContext} from 'react';
import {homeContext} from './home'


const Profile = ()=>{

    const context = useContext(homeContext)

    return <img src={`${context.results[0].picture.large}`} alt="no"/>



}

export default Profile