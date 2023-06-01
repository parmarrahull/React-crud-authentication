import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBra = () => {
  const [displayusername, displayusernameupdate] = useState('');
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem('username');
      if (username === '' || username === null) {
        usenavigate('/login');
      } else {
        displayusernameupdate(username);
      }
    }

  }, [location])
  return (
    <>
      {showmenu &&
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React Crud
            </a>
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
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about "
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>

                <span style={{ color:"white", marginLeft: '105%',display:"flex",alignItems:"center" }}>Welcome:- <b>{displayusername}</b></span>
              </ul>
            </div>
            <Link to="/user/add" type="button" className="btn btn-primary w-10">Add User</Link>
            <Link className="btn btn-primary w-10" aria-current="page" to="/login" >Logout</Link>
          </div>
        </nav>
      }
    </>
  );
};

export default NavBra;
