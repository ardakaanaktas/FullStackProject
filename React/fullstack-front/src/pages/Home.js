import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {
  const [users, setUser] = useState([]);

  

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/users");
    setUser(result.data);
  };

  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/api/user/${id}`)
    loadUsers()
  }

  return (
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">E-mail</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-outline-secondary mx-2"
                    to={`viewuser/${user.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>
                      Edit
                    </Link>
                    <button className="btn btn-outline-danger mx-2"
                    onClick={()=>deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
