import React from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";
import profileImage from "../assets/l.jpg";
import "./Home.css";


function Home() {

  
  const navigate = useNavigate();

  const handlecontact = () => {
    navigate("/contact")

  }
  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1>
            Hi There!{" "}
            <span role="img" aria-label="wave" className="wave-emoji">
              👋
            </span>
          </h1>
          <h2>I'M VAISHNAVI CHOUDHARY</h2>
          <h3>
            <Typical
              steps={[
                "Freelance Developer",
                1000,
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h3>
          <p className="experience">1.2 Years of Experience</p>
          <button className="contact-button" onClick={handlecontact}>Contact</button>
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </>
  );
}

export default Home;
