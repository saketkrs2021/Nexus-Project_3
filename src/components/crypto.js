import { useState } from "react";
import { useEffect } from "react";
import "../styles/Crypto.css"
import { useNavigate } from "react-router-dom";
import LiveChart from "./chart";
import cloud from '../images/products/cloud.jpeg';
import databases from '../images/products/databases.png';
import network from '../images/products/network.png';
import server from '../images/products/server.png';
import software from '../images/products/software.png';



function Crypto() {



    const key = process.env.REACT_APP_KEY;
    const [data, setData] = useState([]);
    const [trend, setTrend] = useState({});

    const [Cryall, setCryall] = useState(false);

    const [Hide, setHide] = useState(false);
    const wid = Hide ? { width: "80%", backgroundColor: "grey", color: "white", borderRadius: "10px", marginLeft: "10%" } : {};








    // fetching api of search trend by people and coin api

    useEffect(() => {

        const fettrend = async () => {
            const url1 = "https://api.coingecko.com/api/v3/search/trending";

            const options1 = {
                method: "GET",
            };

            try {
                const response1 = await fetch(url1);


                const result1 = await response1.json();
                setTrend(result1.coins);
                console.log("trendis", result1)

            } catch (error) {
                console.error(error);
            }

        };
        const fetchDatas = async () => {
            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": key,
                    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.data)
                setData(result.data.coins);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDatas();
        fettrend();
    }, [key]);



    // doing buying part


    const url2="https://trade-backend-0823.onrender.com";
    const navigate = useNavigate();

    const [res, setres] = useState({key:"value"});

    // console.log(typeof(res));
    
    const email = sessionStorage.getItem("email");

    const [dep, setDep] = useState(0)



    const fetchdata = async () => {
        try {


            const url1 = `${url2}/users/buy?email=${encodeURIComponent(email)}`;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(url1, requestOptions);
            const data = await response.json();

            console.log(data);
            

            setres(data.user.pre);
            

        }
        catch (error) {
            console.log("error in fetching data", error);
        }
    }





    const handleBuy = async (name, link,symbol,price) => {
        const att = { "email": email, "symbol":symbol,"price": price,"link":link };
        console.log(name);

        if (sessionStorage.length > 0) {
            const bs = {};
            Object.assign(bs, { N: name });
            let crypto = {
                ...att,
                ...bs,
            };
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(crypto)
            };


            try {
                const response = await fetch(url2 + `/users/buy`, requestOptions);
                const data = await response.json();
                console.log(data);
                setDep(dep + 1);

            }
            catch (error) {
                console.log("error in fetching data", error);
            }
        } else {
            navigate('/signin');
        }

    }



    useEffect(() => {
        fetchdata();
    }, [dep])



    // if(Object.keys(res).length){
    //     setres({key:"value"});
    // }

    const [stockData, setStockData] = useState({})

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
    };


    useEffect(() => {
        fetchDatas(url, options)
    }, []);





console.log("resis",res);



    const showAll = () => {
        setCryall(!Cryall);
        setHide(!Hide);
    }

    const [candle, setCandle] = useState(false);


    const handleClick = (event) => {
        const symbol = event.target.querySelector('.cname').textContent.trim();
        console.log(symbol);
    }









    return (
        <div className="cmb">

            {!Hide && (<div className="tb">
                <p > Our Top Services</p>
            </div>)}


            {!Hide && (<div className="tc">
                <div className="ctc">

                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={cloud} alt="Coin Icon" />
                            </div>
                            <div className="cname">Cloud Computing </div>

                            {/* <div className="cprice">&#x20B9; {parseFloat(trend[0].item.price_btc).toFixed(2)} </div> */}
                        </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>
                <div className="ctc">
                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={databases} alt="Coin Icon" />
                            </div>
                            <div className="cname">Databases </div>

                            {/* <div className="cprice">&#x20B9; {parseFloat(trend[1].item.price_btc).toFixed(2)} </div> */}
                        </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>
                <div className="ctc">
                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={network} alt="Coin Icon" />
                            </div>
                            <div className="cname">Network Services </div>

                            {/* <div className="cprice">&#x20B9; {parseFloat(trend[2].item.price_btc).toFixed(2)} </div> */}
                        </div>)

                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>
                
                <div className="ctc">
                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={server} alt="Coin Icon" />
                            </div>
                            <div className="cname">Servers </div>

                            {/* <div className="cprice">&#x20B9; {parseFloat(trend[2].item.price_btc).toFixed(2)} </div> */}
                        </div>)

                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>

                <div className="ctc">
                    {trend.length > 0 ?
                        (<div className="cdetail">
                            <div className="img1">
                                <img id="img1" src={software} alt="Coin Icon" />
                            </div>
                            <div className="cname">Application Software </div>

                            {/* <div className="cprice">&#x20B9; {parseFloat(trend[2].item.price_btc).toFixed(2)} </div> */}
                        </div>)

                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)
                    }

                </div>
            </div>)}


            {/* <div className="eb">
                {!Hide && (<p> Explore coins</p>)}
                {!Hide && (<p style={{ cursor: "pointer", color: "green" }} onClick={showAll}> ALL</p>)}
                {Hide && (<p style={{ cursor: "pointer", color: "blue" }} onClick={showAll}> Hide</p>)}
            </div> */}



            {Hide && data.length > 0 && data.map((item, index) => (
                <div className="crypto_mb">
                    <div style={{ width: "33.3333%", }}>
                        <img style={{ marginLeft: "10px", marginTop: "10px", height: "58px", width: "auto" }} src={item.iconUrl} alt={item.name} />
                        <p style={{ marginLeft: "10px" }}>{item.symbol}</p>
                        <p style={{ marginLeft: "10px" }} > &#x20B9; {parseFloat(item.price).toFixed(2)}</p>
                    </div>
                    <div style={{ width: "33.3333%", fontWeight: "200" }}>
                        <p> Rank: {item.rank}</p>
                        <p> Name: {item.name}</p>
                        {!res.hasOwnProperty(item.symbol) && <button style={{ borderRadius: "10px", background: "green", cursor: "pointer", height: "40px", width: "100px" }} onClick={() => handleBuy(item.name, item.iconUrl,item.symbol,parseFloat(item.price).toFixed(2))}>Buy Now</button> }
                        {res.hasOwnProperty(item.symbol) && <p style={{ textAlign: "center" }}>purchased</p>}
                    </div>
                    <div className="grp">
                        <LiveChart stockData={stockData} />
                    </div>
                </div>
            ))}




            {/* {
            !Hide && (<div className="tc">
                <div className="ctc">
                    {data.length > 0 ? (<div onClick={handleClick} className="cdetail">
                        <div className="img1">
                            <img id="img1" alt="Coin Icon" src={data[0].iconUrl} />
                        </div>
                        <div className="cname"> {data[0].symbol} </div>

                        <div className="cprice">&#x20B9; {parseFloat(data[0].price).toFixed(2)}</div>

                    </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}


                </div>
                <div className="ctc">
                    {data.length > 0 ? (<div className="cdetail">
                        <div className="img1">
                            <img id="img1" alt="Coin Icon" src={data[1].iconUrl} />
                        </div>
                        <div className="cname"> {data[1].symbol} </div>

                        <div className="cprice">&#x20B9; {parseFloat(data[1].price).toFixed(2)}</div>
                    </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}

                </div>

                <div className="ctc">
                    {data.length > 0 ? (<div className="cdetail">
                        <div className="img1">
                            <img id="img1" alt="Coin Icon" src={data[2].iconUrl} />
                        </div>
                        <div className="cname"> {data[2].symbol} </div>

                        <div className="cprice">&#x20B9; {parseFloat(data[2].price).toFixed(2)}</div>
                    </div>)
                        : (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}


                </div>

               

            </div>
            )} */}

            {/* {!Hide && <div className="mdl"><LiveChart stockData={stockData} /></div>} */}



        </div>
    );

}


export default Crypto;