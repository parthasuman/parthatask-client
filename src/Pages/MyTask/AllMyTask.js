import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const AllMyTask = ({
  allTask,
  handleDelete,
  handleStatusUpdate,
  handaleDone,
}) => {
  const { _id, name } = allTask;

  return (
    <div>
      <Container>
        <div className="mt-4">
          {/* trying */}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Task</Card.Title>
              <Card.Text>{name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button onClick={() => handaleDone(_id)} variant="primary">
                  {allTask.advertised ? "completed" : "Not completed"}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button onClick={() => handleDelete(_id)} variant="danger">
                  Delete
                </Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Button
                  onClick={() => handleStatusUpdate(_id)}
                  variant="success"
                >
                  {status ? status : "pending"}
                </Button>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Link to={`/update/${_id}`}>
                  <Button>Update</Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AllMyTask;
