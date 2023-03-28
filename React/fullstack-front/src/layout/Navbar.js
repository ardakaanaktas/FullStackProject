import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Full Stack Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-outline-light mx-1">
                Search
              </Link>
            </form>
            <form className="d_flex" role="button">
              <Link className="btn btn-outline-light mx-1" to="/add" id="btn_user_add">
                Add User
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
