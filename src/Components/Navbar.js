import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({type,count }) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "rgb(14 8 94)" }}
    >
      <div className="container-fluid">
        <Link className="text-light navbar-brand fw-bold" to="/">
          React Hooks
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                className="text-light nav-link active "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light nav-link  " to="/Todo">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light nav-link  " to="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="text-light nav-link  " to="/Users">
                Users
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>

          <div>
            {!type ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </form>
            ) : (
              <>
                <BsFillCartCheckFill
                  style={{
                    color: "white",
                    fontSize: "1.6rem",
                    marginRight: "10px",
                  }}
                />
                <span style={{ color: "white" }}>Items: {count} </span>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
