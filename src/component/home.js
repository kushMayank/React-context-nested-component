import React,{useState, useEffect}  from 'react';
import Loader from './common/loader';
import Profile from './profile'
import Loginform from './loginform'

export const homeContext = React.createContext();

const HomeComponent=()=>{

const [count, setcount] = useState(1);
const [color, setcolor] = useState('pink');
const [user, setuser] = useState({
    results:[
    {
        picture:{
            medium:""
        }
    }
]
 })


useEffect(() => {
    // debugger
    // return  (count%2 !== 0 )?
    // setcolor('pink') : setcolor('black')

    document.title = `You clicked ${count} times and color is ${color}`;
    (count % 2 === 0 )? setcolor("gray"): setcolor('pink');

    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => setuser(data));

}

   
    
,[count]);

let obj = {
    key:"value",
    ary:[1,2,3]
}
return <homeContext.Provider value={user}>
    <Loginform/>
    <h1 style={{"background-color": `${color}`}}>Home  {count} {color} {JSON.stringify(user.results[0].picture)}</h1>
    <Profile/>
    <button   onClick={()=>setcount(count+1)}  >CLICK ME</button>
    <Loader>
        {obj}
    </Loader>
    </homeContext.Provider>
    
}

export default HomeComponent;