import {React,useState} from 'react';
import Navbar from './Navbar';

const UseStObj=()=> {
const myObj=
    {myName:"khan",age:20,ciry:"Mumbai"}

const [name,setName] = useState(myObj);


const handleClick=()=>{
  setName({...name,myName:"Umair"})
}

  return (
    <div className="UseStObj">
    <Navbar />
    <div className="d-flex flex-column justify-content-center">
  <h1 className="text-center">{name.myName} {name.age}</h1>
      <button className="btn btn-outline-primary" style={{margin:"05px 350px"}} onClick={()=>handleClick()}>
       Update</button> 
       </div>
    </div>
  );
}


export default UseStObj;
 