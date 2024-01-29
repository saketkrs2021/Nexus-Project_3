import { useEffect } from "react";
import { useState } from "react";
import "../styles/news.css"
import Navbar from "./navbar1"

const News = () => {


    const [newsData, setNewsData] = useState({})
    // const url = 'https://real-time-finance-data.p.rapidapi.com/currency-news?from_symbol=USD&to_symbol=EUR&language=en';
    const url="https://finnhub.io/api/v1/news?category=general&token=clq6egpr01qjl4hp5usgclq6egpr01qjl4hp5ut0";
    const options = {
        method: 'GET',
       
    };



    const fetchnews = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setNewsData(result);
        } catch (error) {
            console.error(error);
        }
        // console.log(newsData)
    }


    const [dep, setdep] = useState(0)
    useEffect(() => {
        if (dep < 5) {
            fetchnews();
            setdep(dep => dep + 1);
        }


    }, dep);



    return <>
        <div>

            <Navbar />

            <div style={{ textAlign: "center", fontFamily: "sans-serif", color: " rgb(36, 36, 84)" }}>
                <h1>NEWS</h1>

            </div>

           {newsData.length === 0 && (<div className="mloader">
                            <p className="loader">
                            </p>
                        </div>)}



            {newsData.length > 0 && newsData.map(item => (<div className="newmb" key={item.article_url}>

                <div className="newsimg">
                    {newsData.length > 0 &&
                        (<img src={item.image} id="nimg" alt="#" />)}
                </div>

                <div className="newscontent">
                    <h3 style={{ textAlign: "center" }}>
                        {item.headline}</h3>
                    <div className="rdmbtn">


                        <a style={{ textDecoration: "none", fontSize: "15px" }}
                            href={item.url} target="_blank"
                            rel="noopener noreferrer">
                            <button id="rdmbtn" >Read More</button></a></div>
                </div>
            </div>))}
        </div>
    </>

}


export default News;