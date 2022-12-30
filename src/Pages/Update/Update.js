import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Update = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);

  const handleUpdateTaskSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`https://partha-task-server.vercel.app/allTasks/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Task updated");
          console.log(data);
          event.target.rseet();
        }
      });
  };

  const handleInputeChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <Container>
        <h2>Please Update: {storedUser.text}</h2>
        <Form onSubmit={handleUpdateTaskSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter update task</Form.Label>
            <Form.Control
              onChange={handleInputeChange}
              defaultValue={storedUser.text}
              name="name"
              type="text"
              placeholder="Daily Task"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
        {/* <form onSubmit={handleUpdateTaskSubmit}>
          <input
            onChange={handleInputeChange}
            defaultValue={storedUser.text}
            type="text"
            name="name"
            placeholder="text"
            required
          />

          <button type="submit">Update User</button>
        </form> */}
      </Container>
    </div>
  );
};

export default Update;
