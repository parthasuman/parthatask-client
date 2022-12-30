import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "gray",
  });

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "gray",
      });
    }
  };

  return (
    <div className="my-3">
      <Container>
        <button onClick={toggleStyle}>Dark Mode</button>
        <div className="text-center my-3" style={myStyle}>
          This is Footer
        </div>
      </Container>
    </div>
  );
};

export default Footer;
