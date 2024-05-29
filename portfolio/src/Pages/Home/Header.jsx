import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <marquee
        className="marquee-text fixed-top"
        behavior="scroll"
        direction="left"
      >
        Design is not just what it looks like and feels like. Design is how it
        works.
      </marquee>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top mt-4"
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgba(4, 17, 26, 0.7)",
            borderRadius: "10px 10px 0 0",
            width: "90%",
            border: "0px solid white",
          }}
        >
          <span
            className="navbar-brand"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 35,
              fontFamily: "Nosifer, sans-serif",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => navigate("/")}
          >
            PORTFOLIO
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav" style={{ marginRight: "10px" }}>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => navigate("/about")}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Nosifer, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  About
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => navigate("/projects")}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Nosifer, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Projects
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => navigate("/experience")}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Nosifer, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Experience
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => navigate("/skills")}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Nosifer, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Skills
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => navigate("/achievements")}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Nosifer, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Achievements
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => navigate("/contact")}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Nosifer, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}