import {React,useState} from 'react';
import Navbar from './Navbar.js';


function Todo() {

const items=[
  {
    id:0, title:"Meeting" , body:"Tommorow Meeting is on 5pm"
  },
  {
    id:1, title:"Shopping" , body:"Shopping is on 1pm"
  },
  {
    id:2, title:"Playing" , body:"Playing time is on 7am"
  },
  {
    id:3, title:"Study" , body:"Study of Mern Stack Development on 3pm"
  },
  {
    id:4, title:"working" , body:"working from 9 to 5"
  },
  {
    id:5, title:"Training" , body:"Swimming Class on 7pm"
  },
  {
    id:6, title:"Work Out" , body:"Workout from 6 to 7.30"
  },
  {
    id:7, title:"Lectures" , body:"college lectures from 10 to 3"
  },
  {
    id:8, title:"Sleeping" , body:"Sleeping from 10 to 5"
  },
]


const [tasks,setTasks]=useState(items);


const clearArray=()=>{
  setTasks([])
}


const removeELem=(id)=>{

  const newArr=tasks.filter((currElem)=>{
    return currElem.id!== id;
  })
  console.log(newArr)
   setTasks(newArr);
}



  return (
    <div>
    <Navbar />
    <button className='btn btn-outline-danger float-end' style={{marginRight:"140px",marginTop:"11px"}} onClick={()=>clearArray()}>Clear All</button>
    <h2 className='text-center my-3 fw-midbold'style={{color:"rgb(14 8 94)"}}>Todo List</h2>
      <hr />
      <div className='container d-flex flex-wrap justify-content-center'>
    {
      tasks.map((elem)=>{
        return (
    <div key={elem.id} className="card mx-2 my-2 " style={{width:"16rem"}}>
  <div className="card-body">
    <h5 className="card-title">{elem.title}</h5>
    <p className="card-text text-secondary">{elem.body}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>removeELem(elem.id)}>Remove</button>
  </div>
</div> 
)})
 }

</div>
</div>
  )
}

export default Todo