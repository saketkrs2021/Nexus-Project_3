
import "../styles/navbar1.css"
import comlogo from "../images/clogo.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import menuicon from "../images/menu.png"
import { useState } from "react";

function Nav() {

    const [show, setshow] = useState(false);

    const navigate = useNavigate();


    const menubar = () => {
        setshow(!show);
    }




    const handleLogout = () => {
        sessionStorage.removeItem("email");

        if (sessionStorage.length === 0) {
            toast.info('You have successfully logged out.');
        }

        setTimeout(() => {
            navigate("/");
        }, 3000);

    }





    return (
        <div className="mnav">

            <div className="navlogo">
                <img src={comlogo} alt="#" />
            </div>
            <div className="navlinks">
                <div className="menuicon" onClick={menubar}>
                    <img src={menuicon} alt="#" />
                </div>
                <a className="aref" href="/home">Home</a>
                <a className="aref" href="/user/dashboard">Dashboard</a>
                <a className="aref" href="/pricing">Services</a>
                {/* <a className="aref" href="/news">News</a> */}
                {(sessionStorage.length === 0) && (<a href="/SignIn"><button id="conbtn" className="aref">SignIn</button></a>)}
                {(sessionStorage.length > 0) && (<p onClick={handleLogout}><button id="conbtn" className="aref">Logout</button></p>)}
            </div>

            {show && (
                <div className="notshow">
                    <div className="icon_items"  ><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/">Home</a></div></div>
                    <div className="icon_items"><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/user/dashboard">Dashboard</a></div></div>
                    <div className="icon_items"><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/pricing">Pricing</a></div></div>
                    <div className="icon_items"><div className="icon_itemc"> <a style={{ textDecoration: "none", color: "white", marginTop: "10px" }} href="/news">News</a></div></div>
                    {(sessionStorage.length === 0) && (<div className="icon_items"><div className="icon_itemc"><a style={{ textDecoration: "none", color: "white" }} href="/SignIn">SignIn</a></div></div>)}
                    {(sessionStorage.length > 0) && (<div className="icon_items"><div className="icon_itemc"><p style={{ textDecoration: "none", color: "white" }} onClick={handleLogout}>Logout</p></div></div>)}
                </div>
            )}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );




}



export default Nav;