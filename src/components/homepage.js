import "../styles/homepage.css";
import Footer from "./footer.js";
import Feedback from "./feedback.js";
import invest from "../images/investers.png";
import Nav from "./navbar1.js";
import real from "../images/real.jpg";
import secure from "../images/secure.jpg";
import maximize from "../images/maximize.jpg";
import t4 from "../images/t4.jpg";
import customer from "../images/customer.jpg";
import effort from "../images/effort.jpg";
import Aboutus from "./aboutus.js";
import softwareimg from '../images/software.jpg'

function HomePage() {
  return (
    <div className="bb">
      <Nav />
      <div className="fb">
        <div className="fcfb">Every Techie needs This Software</div>
        <div className="scfb">
          {" "}
          <img id="scfb" src={softwareimg} />
        </div>
      </div>

      <div className="sb">
        <div className="pfsb">Our Products and Services</div>
        <a href="pricing">
          <button id="pbtn">View Pricing</button>
        </a>
      </div>

      <div className="tb">
        <div className="fbtb">Backed By Top Investers And Founders</div>
      </div>

      <div className="top_investers">
        <img id="tinvest" src={invest} alt="#" />
      </div>

      <Aboutus />

      <div>
        <h1 style={{ textAlign: "center" }}>Why Us!</h1>
        <div className="whyus">
          <div className="why_us_content">
            <div className="whyimg">
              <img id="whyimg" src={secure} alt="#" />
            </div>
            <div className="whycontent">
              <h3>Unique Value Proposition (UVP)</h3>
              <p>
                At CodeHarbor, we pride ourselves on delivering a
                unique and unparalleled software experience tailored to meet the
                distinct needs of our users. Our innovative approach ensures
                that you not only solve problems but also stay ahead in an
                ever-evolving digital landscap
              </p>
            </div>
          </div>
          <div className="why_us_content">
            <div className="whyimg">
              <img id="whyimg" src={effort} alt="#" />
            </div>
            <div className="whycontent">
              <h3>User friendly design</h3>
              <p>
                Experience the ease of use with our intuitive design. We
                prioritize user-friendliness, making it simple for you to
                navigate and leverage the full potential of our software without
                a steep learning curve.
              </p>
            </div>
          </div>
          <div className="why_us_content">
            <div className="whyimg">
              <img id="whyimg" src={real} alt="#" />
            </div>
            <div className="whycontent">
              <h3>Security Measures</h3>
              <p>
                Your data security is our top priority. Benefit from robust
                security features that safeguard your information, giving you
                peace of mind in an increasingly interconnected world.
              </p>
            </div>
          </div>
          <div className="why_us_content">
            <div className="whyimg">
              <img id="whyimg" src={t4} alt="#" />
            </div>
            <div className="whycontent">
              <h3>Industry Recognition and Awards</h3>
              <p>
                Choose a software provider with a proven track record. CodeHarbor has been recognized in the industry, earning
                awards that underscore our commitment to excellence.
              </p>
            </div>
          </div>
          <div className="why_us_content">
            <div className="whyimg">
              <img id="whyimg" src={maximize} alt="#" />
            </div>
            <div className="whycontent">
              <h3> Money-Back Guarantee or Trial Period</h3>
              <p>
                We're confident you'll love our software. Try it risk-free with
                our 3 months money-back guarantee or explore our trial period.
                Your satisfaction is our priority.
              </p>
            </div>
          </div>
          <div className="why_us_content">
            <div className="whyimg">
              <img id="whyimg" src={customer} alt="#" />
            </div>
            <div className="whycontent">
              <h3>Customer Support</h3>
              <p>
                Customer service team and any educational resources provided to
                users. Share success stories of how your support team has
                resolved issues promptly, building trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Feedback /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
