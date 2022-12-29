import Navbar from "../Navbar";
import { React, useState, useRef } from "react";
import { useLocation} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const name = useRef(null);

  //we will store Email ans password in form of object

  const [allData, setAlldata] = useState([]);

  const handleSubmit = (e) => {
    if (email && password) {
      e.preventDefault();
      const newData = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAlldata([...allData, newData]);
      setEmail("");
      setPassword("");
      console.log(allData);
    } else {
      alert("Please Fill All The Data !");
    }
  };

  const display = (e) => {
    e.preventDefault();
    const value = name.current.value;
    value === null ? alert("plz Enter the name") : setShow(true);
  };

  const location = useLocation();



  const toastMsg = () => {
    toast.success("User Registered Successfully!!");
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center">
        <h2 className="text-center text-danger my-2">
          This is a {location.pathname.replace("/", "")} By useLocation
        </h2>

        <div className=" mx-5">
          <form className="my-5" onSubmit={handleSubmit}>
            <h1 className="text-center my-3">Login Page</h1>

            <div className="mb-3">
              <label forhtml="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label forhtml="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <hr />

          <div className="container text-center my-3">
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th scope="col" className="table-primary">
                    Email ID
                  </th>
                  <th scope="col" className="table-primary">
                    Password
                  </th>
                </tr>
              </thead>

              {allData.map((elem) => {
                return (
                  <tbody key={elem.id}>
                    <tr className="table-primary">
                      <td className="table-light">{elem.email}</td>
                      <td className="table-light">{elem.password}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>

        <form className="mx-5" onSubmit={display}>
          <h1 className="text-center my-5">useRef Example</h1>
          <label forhtml="name">Name: </label>
          <input type="text" className="form-control" ref={name} />
          <div id="emailHelp" className="form-text">
            useRef Hook is Similar to useState but it persist a value and it
            doesnt re-Render
          </div>
          <button
            type="submit"
            className="btn btn-success my-3"
            onClick={toastMsg}
          >
            Submit
          </button>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

          <h2>{show ? `${name.current.value}` : ""}</h2>
        </form>
      </div>
    </>
  );
}

export default Login;
