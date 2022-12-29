import { React, useState, useEffect } from "react";
import Navbar from "../Navbar.js";
import { useFormik } from "formik";
import {TodoSchema} from "./TodoSchema.js";

function Todo() {
  const getItems = () => {
    const data = localStorage.getItem("items");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [tasks, setTasks] = useState(getItems());

  const myObj = {
    title: "",
    category: "",
    description: "",
    bgColor: "",
  };

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: myObj,
      validationSchema: TodoSchema,
      onSubmit: (values,{resetForm}) => {
        setTasks([...tasks, values]);
        resetForm({values:''})
      },
    });

  console.log(tasks);

  const clearArray = () => {
    setTasks([]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(tasks));
  }, [tasks]);

  const removeELem = (id) => {
    const newArr = tasks.filter((elem, idx) => {
      return id !== idx;
    });
    console.log(newArr);
    setTasks(newArr);
  };

  return (
    <div>
      <Navbar />
      <button
        className="btn btn-outline-danger float-end"
        style={{ marginRight: "140px", marginTop: "11px" }}
        onClick={() => clearArray()}
      >
        Clear All
      </button>
      <h2
        className="text-center my-3 fw-semibold"
        style={{ color: "rgb(14 8 94)" }}
      >
        Todo List
      </h2>
      <hr />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-semibold">
              Title :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the title for your task"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title ? (
              <p className="text-danger">{errors.title}</p>
            ) : null}
          </div>


          <label htmlFor="subtitle" className="form-label fw-semibold">
              Sub-Title :
            </label>

          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            name="category"
            onBlur={handleBlur}
          >
            <option value="DEFAULT">Choose a Category ...</option>
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="Casual">Casual</option>
            <option value="Health">Health</option>
            <option value="Other">Other</option>
          </select>
          {errors.category && touched.category ? (
            <p className="text-danger">{errors.category}</p>
          ) : null}

          <div className="mb-3 my-2">
            <label htmlFor="decsription" className="form-label fw-semibold">
              Description :
            </label>
            <input
              type="text"
              className="form-control row-2"
              placeholder="Enter The Description for Your Task!"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description ? (
              <p className="text-danger">{errors.description}</p>
            ) : null}
          </div>

          <div className="mb-3 my-2">
            <label htmlFor="color" className="form-label fw-semibold">
              Select Background Color :
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="bgColor"
            >
              <option value="DEFAULT">Choose a Color ...</option>
              <option value="rgb(105 250 137)">Green</option>
              <option value="rgb(255 85 89)">Red</option>
              <option value="rgb(252 252 12)">Yellow</option>
              <option value="rgb(138 247 255)">Blue</option>
            </select>
            {errors.bgColor && touched.bgColor ? (
              <p className="text-danger">{errors.bgColor}</p>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      <div className="container d-flex flex-wrap justify-content-center my-5">
        {tasks.map((elem, idx) => {
          const { bgColor, category, description, title } = elem;
          return (
            <div
              key={idx}
              className="card mx-2 my-2 "
              style={{ width: "16rem" }}
            >
              <div className="card-body">
                <h5
                  style={{
                    backgroundColor: `${bgColor}`,
                    padding: "10px",
                    borderRadius: "3px",
                  }}
                >
                  {title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text text-secondary">{description}</p>
                <button
                  className="btn btn-sm w-100"
                  style={{ backgroundColor: `${bgColor}`, fontWeight: "650" }}
                  onClick={() => removeELem(idx)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
