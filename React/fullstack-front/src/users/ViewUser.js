import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });


  const { id } = useParams();

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-6 border rounded p-1 mt-3 shadow">
          <h2 className="text-center m-4">User Detail</h2>
          <div className="card">
            <div className="card-header">
              Details of user id:
              <ul className="list-grup list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>

                <li className="list-group-item">
                  <b>User Name:</b>
                  {user.userName}
                </li>

                <li className="list-group-item">
                  <b>E-mail:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"} className="btn btn-outline-danger my-2">Home Page</Link>
        </div>
      </div>
    </div>
  );
}
