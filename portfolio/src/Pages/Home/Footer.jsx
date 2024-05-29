import React from "react";
import { FaReact, FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container text-center fs-4">
        <div
          style={{
            fontWeight: "bold",
            marginBottom: 5,
            fontSize: 40,
            backgroundImage: "linear-gradient(45deg, #ff0000, #0000ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span>The Website is In React</span>{" "}
          <FaReact className="rotate-icon" size={50} color="#61DAFB" />
        </div>
        <div className="mt-2 d-flex justify-content-around">
          <a href="https://www.linkedin.com/in/vaishnavi-choudhary-845a4a1b7" target="blank" className="social-margin">
            <div className="social-icon linkedin">
              <FaLinkedin size={22} />
            </div>
          </a>
          <a href="https://github.com/vaishh-101" target="blank" className="social-margin">
            <div className="social-icon github">
              <FaGithub size={22} />
            </div>
          </a>
          <a href="https://www.instagram.com/vaishh.101" target="blank" className="social-margin">
            <div className="social-icon instagram">
              <FaInstagram size={22} />
            </div>
          </a>
          <a href="t.me/vaishh_101" target="blank" className="social-margin">
            <div className="social-icon telegram">
              <FaTelegram size={22} />
            </div>
          </a>
          <a href="mailto:vaishnavichoudhary200@gmail.com" className="social-margin">
            <div className="social-icon gmail">
              <FaEnvelope size={22} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
