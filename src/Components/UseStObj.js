import { React, useState ,useReducer} from "react";
import useCustom from "./CustomHooks";
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom';


const UseStObj = () => {
  const myObj = { myName: "khan", age: 20, city: "Mumbai" };

  const [name, setName] = useState(myObj);
  const history=useNavigate();

  const handleClick = () => {
    setName({ ...name, myName: "Umair", age: "21" });
  };

  const products=[
    {id:1,imgUrl:'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg',title:"Watch",desc:"this is a new branded watch"},
    {id:2,imgUrl:"https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986__340.jpg",title:"Shoes",dec:"New Branded Shoes"},
    {id:3,imgUrl:'https://cdn.pixabay.com/photo/2016/11/22/21/33/sunglasses-1850648__340.jpg',title:"sunglasses",dec:"New Branded Sunglasses"},
    {id:4,imgUrl:'https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg',title:"Jacket",dec:"New Branded Jacket"},
    {id:5,imgUrl:'https://cdn.pixabay.com/photo/2017/11/14/06/15/shirt-2947548__340.jpg',title:"Shirt",dec:"New Branded Shirt"},
    {id:6,imgUrl:'https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032__340.jpg',title:"t-Shirt",dec:"New Branded t-Shirt"}
    
  ]

  const initialState=0;
  
  const reducer=(state,action)=>{
    if(action.type==="increment"){
      return state+1;
    }
    if(action.type==="decrement"){
      return state-1;
    }
    return state
  }
  
  const [state, dispatch] = useReducer(reducer,initialState);

  
  //Calling Custom Hook

  useCustom(state);





  return (
    <div>
      <Navbar type="cart" count={state} />
      <div className="container d-flex">
        <div className="container d-flex flex-column ">
          <h1 className="text-center my-3">
            {name.myName} {name.age}
          </h1>
          <button
            className="btn btn-outline-primary"
            onClick={() => handleClick()}
          >
            Update
          </button>

          <button className="btn btn-success my-2" onClick={() => history("/Users")}> Redirect to Users</button>

          <hr />
          
          <div className="container d-flex flex-wrap"> 
          {
            products.map(elem=>{
              const {id,title,imgUrl,desc}=elem;
             return ( 

          <div  key={id} className="card my-5 mx-3" style={{ width: "18rem" }}>
            <img src={imgUrl} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {desc}
              </p>
              <button  onClick={()=>dispatch({type:"increment"})} className="btn btn-success">Add to Cart</button>
              <button  disabled={state<=0} onClick={()=>dispatch({type:"decrement"})} className="btn btn-danger my-2 mx-3">Remove</button>
            </div>
          </div>
             ) 
             })
          }
          </div>
          </div>
        <div>
          <h4 className="float-end my-2"><span className="badge bg-primary">Items : {state}</span></h4>
        </div>
      </div>
    </div>
  );
};

export default UseStObj;
