import Nav from "./navbar1";
import { useState } from "react";
import "../styles/dashboard.css"
import pp from "../images/profilepic.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LiveChart from "./chart";
import Footer from "./footer"
import signup from './signup.js'
import signin from './signin.js'
const lis=[]
lis.push(signup.lis);
lis.push(signin.lis);

const Dashboard = () => {
    const [stockData, setStockData] = useState({})
    const [info, setinfo] = useState([]);

    const [c, setc] = useState([])


    const url1 = process.env.REACT_APP_URL;
    const email = sessionStorage.getItem("email");

    const navigate = useNavigate();

    useEffect(() => {



        setTimeout(() => {

            if (sessionStorage.length === 0) {
                navigate('/signin');
            }

        }, 1500);

    }, [])



    const fetchinfo = async () => {
        try {
            const url = `${url1}/users/buy?email=${encodeURIComponent(email)}`;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(url, requestOptions);
            const data = await response.json();

            setinfo(data.user);
            setc(data.user.crypto)

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }


    const url = `https://alpha-vantage.p.rapidapi.com/query?symbol=BTC&function=TIME_SERIES_MONTHLY_ADJUSTED&datatype=json`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '50a855e6c3msh0af1e19cc3f0643p1cf167jsne33d87e559cf',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    const fetchDatas = async (api, opt) => {
        try {
            const response = await fetch(api, opt);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setStockData(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);

        }
    }

    console.log("stodatais", stockData)



    useEffect(() => {
        fetchDatas(url, options)
    }, []);




    useEffect(() => {
        fetchinfo();
    }, [])

    console.log(Object.keys(c).length);

    // console.log(info)
    const originalDateString = "2023-12-16T00:00:00.000Z";
    const originalDate = new Date(originalDateString);
    console.log(originalDate);



    return (<>
        <div>


            <Nav />

            {sessionStorage.length === 0 && (<h1 style={{ textAlign: "center" }}>Please Sign In.......</h1>)}

            {sessionStorage.length > 0 && (<div className="pinfo">
                <img id="upic" src={pp} alt="#" />
                {sessionStorage.length > 0 && (<div className="info" style={{fontFamily:"Robota"}}><h3>Welcome to CodeHarbor{info.fullName}</h3></div>)}
                {sessionStorage.length > 0 && (<div className="info" style={{fontFamily:"Robota"}}>Name:  {lis[0]}</div>)}
                {sessionStorage.length > 0 && (<div className="info" style={{fontFamily:"Robota"}}>Email: {lis[1]}</div>)}
            </div>)}



            {sessionStorage.length && (<div className="mb1">
                {Object.keys(c).length > 0 && (<div className="mb1-child">

                    <div className="coin_icon">
                        <img id="coin_icon" alt="#" src={c[0].link} />
                    </div>
                    <div className="coin_name">
                        {c[0].symbol}
                    </div>
                    <div className="pdate">

                        PurchaseDate: {c[0].date.slice(0, 9)}
                    </div>
                    <div className="ptime">

                        PurchaseTime:  {c[0].time.slice(0, 9)}
                    </div>




                </div>)}
                {Object.keys(c).length > 1 && (<div className="mb1-child">
                    <div className="coin_icon">
                        <img id="coin_icon" alt="#" src={c[1].link} />
                    </div>
                    <div className="coin_name">
                        {c[1].symbol}
                    </div>
                    <div className="pdate">

                        PurchaseDate: {c[1].date.slice(0, 9)}
                    </div>
                    <div className="ptime">

                        PurchaseTime:  {c[1].time.slice(0, 9)}
                    </div>


                </div>)}



            </div>)}

            {sessionStorage.length && (<div className="mb2">
                <div className="mb2-child1">
                    {/* <LiveChart stockData={stockData} /> */}
                </div>
                <div className="mb2-child2">

                </div>
            </div>)}

            <Footer/>

        </div>
    </>);


}


export default Dashboard;




