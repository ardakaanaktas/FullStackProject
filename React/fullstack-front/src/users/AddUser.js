import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUsers() {

  let navigate=useNavigate()

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const { name, userName, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/user",user)
    navigate("/")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-6 border rounded p-1 mt-3 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 mx-2 text-center">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3 mx-2 text-center">
              <label htmlFor="UserName" className="form-label">
                User Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3 mx-2 text-center">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the e-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <button className="btn btn-outline-primary mx-1" type="submit">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-1" to={"/"}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
