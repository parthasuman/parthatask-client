import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Details = () => {
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://placeimg.com/400/225/arch" />
          <Card.Body>
            <Card.Title>Partha</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Front-end web developer with react</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Mongodb</ListGroup.Item>
            <ListGroup.Item>Firebase</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
