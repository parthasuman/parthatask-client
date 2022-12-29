import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const handleAddTaskSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;

    const allTask = {
      text,
    };

    fetch("https://partha-task-server.vercel.app/allTasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("allTask successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <Container>
      <Form onSubmit={handleAddTaskSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your daily task</Form.Label>
          <Form.Control name="text" type="text" placeholder="Daily Task" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
