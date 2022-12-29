import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllMyTask = ({
  allTask,
  handleDelete,
  handleStatusUpdate,
  handaleDone,
}) => {
  const { _id, text, status } = allTask;

  return (
    <div>
      <Container>
        <div className="mt-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Task</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button onClick={() => handaleDone(_id)} variant="primary">
                {allTask.advertised ? "done" : "undone"}
              </Button>
              <Button onClick={() => handleDelete(_id)} variant="danger">
                Delete
              </Button>
              <Button onClick={() => handleStatusUpdate(_id)} variant="success">
                {status ? status : "pending"}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AllMyTask;
