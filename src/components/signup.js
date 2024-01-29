import React, { useState } from 'react';
import '../styles/Signup.css'
import sdim from "../images/i3.png"
import clogo from "../images/clogo.png"
import Nav from "./navbar1.js"
import { useNavigate} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const lis=[];
const SignUpForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const back = "https://trade-backend-0823.onrender.com";
  // const back = "http://localhost:8000";
    // const back="http://localhost:8000";
    

  const url = back + "/users/signup";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {


    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    lis.push(formData.username);
    lis.push(formData.password);
    lis.push(formData.email);




    const func = async () => {

      const response = await fetch(url, requestOptions);
      const response_data=await response.json();
      if(response_data.token){
        toast.success('Register successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000 // Auto close the toast after 3 seconds
        });

        

      
         setTimeout(() => {
          navigate("/signin")
        }, 2300);
      }else{
        toast.error("unable to register please try again", {
          position: toast.POSITION.TOP_LEFT
        });
      }
    }



    

    func();

  };

  return (
    <>
    <Nav/>
      
      <div className='mb'  >
        <div className='credIp'>
          <h2 className='signhd'>Registration form</h2>
          <div className='logo'>
            <img id='clogo' src={clogo} alt='#' />
          </div>
          <form onSubmit={handleSubmit}>
            <div className='username'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className='email'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='pass'>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='sbtn'>
              <button id='sbt' type="submit">Sign Up</button>
            </div>
            <div className='al'>
              <a href='/signin' id='al'>
                Already have an account?
              </a>
            </div>
          </form>
        </div>
        <div className='sdpc'>
          <img id='sdpc' src={sdim} alt='#' />
        </div>

      </div>

    </>);
};

export default SignUpForm;