import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/customer/${id}`, user);
    // history.push("/");
    navigate('/');
  };

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8000/customer/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your UserName"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Website Name"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button
          onClick={(e) => onSubmit(e)}
          type="button"
          class="btn btn-primary"
        >
          Update User
        </button>
        <Link to="/">
          <button type="button" class="btn btn-secondary">
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
};

export default EditUser;
