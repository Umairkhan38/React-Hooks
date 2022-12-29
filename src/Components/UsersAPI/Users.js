import React, { useEffect ,useState } from "react";
import Navbar from "../Navbar.js";
import Loading from './Loading.js'
import { FcApproval , FcBusinessman } from "react-icons/fc";


function Users() {

const [manage,setManage]=useState([]);
const [loading , setLoading]=useState(true)



const getData = async () => {

    try{
      setLoading(false)
        const data =await  fetch("https://api.github.com/users")
       setManage(await data.json());
}
catch(err){
  console.console.log("Error Occured "+err);
}

}
  useEffect(() => {
    console.log("useEffect executed !")
    getData();
  }, []);


  if(loading){
    return <Loading />
  }




  return (
    <>
      <Navbar />
      <h2 className="text-center my-3"><FcBusinessman /> Users</h2>
      {/* <button className="btn btn-primary" onClick={history.location('/Login')}>Go Back</button> */}
      <hr />
      <div className="container my-3 d-flex flex-wrap">


      { manage.map((elem)=>{

          const {login,avatar_url,id,type}=elem;
        return (
        <div className="card mx-5 my-3" style={{ width: "15rem" }}  key={id}>
          <img
          style={{height:"180px", objectFit:"cover"}}
            src={avatar_url}
            className="card-img-top"
            alt="Users Img"
          />
          <div className="card-body">
            <h5 className="card-title">{login} <FcApproval /></h5> 
            <p className="card-text ">Type: {type}</p>
          </div>
        </div>
        )
      })
    }
      </div>
    </>
  );
}

export default Users;
