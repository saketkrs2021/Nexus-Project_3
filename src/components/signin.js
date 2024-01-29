import React, { useEffect, useState } from 'react';
import '../styles/Signup.css'
import sdim from "../images/i3.png"
import clogo from "../images/clogo.png"
import { useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./navbar1.js"
const lis=[];


const SignUpForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });


    const handleLogin = () => {
      
        navigate("/")
      };

   


    const [Token, setToken] = useState(null);

    const [load, setLoad] = useState()
    const [a, setA] = useState(false);

     
    const handleload = () => {
        if(sessionStorage.length>0){
            toast.success('Login successful!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000 // Auto close the toast after 3 seconds
              });
        }
        setA(!a);
        
       
    }

    useEffect(() => {


        if (Token) {
            handleload();
            setLoad(false);
           setTimeout(() => {
            handleLogin();
            
           }, 2300); 
            
        } else {
            setLoad(true);

        }



    }, [Token])


    // console.log(load);





    const back = "https://trade-backend-0823.onrender.com";
    // const back="https://backend-ljn1.onrender.com/";
    

    const url = back + "/users/signin";
    // console.log(back)

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






        const func = async () => {

            const response = await fetch(url, requestOptions);
            console.log(response);
            const data = await response.json();
            const token = data.token;
            console.log(token)
            if (token) {
                sessionStorage.setItem('email', data.user.email);
                setToken(token);
            }
            if (!token) {
                toast.error("wrong email or password", {
                    position: toast.POSITION.TOP_LEFT
                  });
            }


        }

        func();
    };

    return (
        <>
        <Nav/>
        lis.push(form.username);
      lis.push(form.password);
      lis.push(form.email);
            <div className='mb'  >

                <div className='credIp'>
                    <h2 className='signhd'>LOGIN </h2>
                    <div className='logo'>
                        <img id='clogo' src={clogo}  alt='#'/>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                            <button id='sbt' type="submit" onClick={handleload} >Sign In</button>
                            <ToastContainer />
                       
                        </div>
                        <div className='al'>
                            <a href='/signup' id='al'>
                                Don't have account?
                            </a>
                        </div>
                    </form>
                </div>
                <div className='sdpc'>
                    <img id='sdpc' src={sdim} alt='#' />
                </div>
            </div>
            {a && load && (<div className="mloader">
                <p className="loader">
                </p>
            </div>)}
            
            
        </>);
};

export default SignUpForm;









