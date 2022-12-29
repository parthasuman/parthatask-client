import React from "react";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const AllMedia = ({ addTask }) => {
  const { text, image } = addTask;
  console.log(addTask);
  return (
    <Container>
      <div className="mt-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default AllMedia;
