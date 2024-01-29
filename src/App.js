import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/signin';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Stokes from './components/Stokes';
import HomePage from './components/homepage.js';
import Nav from "./components/navbar1.js"
import News from './components/news.js';
import LiveChart from "./components/chart.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="signin" element={<Signin />} />
        <Route exact path="home" element={<HomePage />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="pricing" element={<Stokes />} />
        <Route exact path="user/dashboard" element={<Dashboard />} />
        <Route exact path="/nav" element={<Nav />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/chart" element={<LiveChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


