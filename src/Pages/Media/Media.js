import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AllMedia from "./AllMedia";

const Media = () => {
  const [addTasks, setAddTasks] = useState([]);

  useEffect(() => {
    fetch("https://partha-task-server.vercel.app/addTasks")
      .then((res) => res.json())
      .then((data) => setAddTasks(data));
  }, []);

  return (
    <div>
      <Container>
        {addTasks.map((addTask) => (
          <AllMedia key={addTask._id} addTask={addTask}></AllMedia>
        ))}
      </Container>
    </div>
  );
};

export default Media;
