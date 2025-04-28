import React from "react";
import { Link } from "react-router-dom"; 

const LandingPage = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      fontFamily: "'Arial', sans-serif"
    }}>
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          color: "#0a192f",
          textAlign: "center",
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>
          Customer Segmentation<br />Tool for E-commerce
        </h1>

        <p style={{
          fontSize: "1.2rem",
          color: "#4a5568",
          textAlign: "center",
          marginBottom: "3rem"
        }}>
          Segment your customers to improve marketing strategies
        </p>

        
        <Link to="/segmentation-page" style={{
          backgroundColor: "#2563eb",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 600,
          padding: "0.75rem 2rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          marginBottom: "4rem"
        }}>
          Start Segmentation
        </Link>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginTop: "1rem",
          flexWrap: "wrap"
        }}>
          {[
            "react/react-original",
            "nodejs/nodejs-original",
            "python/python-original",
            "postgresql/postgresql-original",
            "tensorflow/tensorflow-original"
          ].map((tech, index) => (
            <img
              key={index}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}.svg`}
              alt={tech.split("/")[0]}
              style={{
                height: "40px",
                width: "auto",
                opacity: 0.8,
                transition: "opacity 0.3s"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
            />
          ))}
        </div>
      </div>

      <div style={{
        width: "100%",
        height: "5px",
        background: "linear-gradient(to right, #3b82f6, #14b8a6)"
      }}></div>
    </div>
  );
};

export default LandingPage;
