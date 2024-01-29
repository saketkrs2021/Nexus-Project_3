import "../styles/Footer.css";
import cl from "../images/cl.jpg";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import social from "../images/social.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="cfooter">
        <div className="comname">CodeHarbor</div>
        <div>
          <p style={{ textAlign: "center", marginTop: "60px" }}>Follow Us On</p>
          <div className="socialmedia">
            <img src={facebook} id="sicons" alt="#" />
            <img src={instagram} id="sicons" alt="#" />
            <img src={twitter} id="sicons" alt="#" />
          </div>
        </div>
        <div><p style={{ textAlign: "center", marginTop: "60px" }}>Contact Us</p>
              
              Email: saketkrs19@gmail.com
      </div>
      </div>
      
      <div className="mdwl">Made with &#10084; in India</div>
    </footer>
  );
}

export default Footer;
