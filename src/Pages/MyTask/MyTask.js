import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import AllMyTask from "./AllMyTask";

const MyTask = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    fetch("https://partha-task-server.vercel.app/allTasks")
      .then((res) => res.json())
      .then((data) => setAllTasks(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you syre, you want to delete this Task"
    );

    if (proceed) {
      fetch(`https://partha-task-server.vercel.app/allTasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = allTasks.filter((allTask) => allTask._id !== id);
            setAllTasks(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://partha-task-server.vercel.app/allTasks/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "OK" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = allTasks.filter((allTask) => allTask._id !== id);
          const approving = allTasks.find((allTask) => allTask._id === id);
          approving.status = "OK";

          const newAllTasks = [...remaining, approving];
          setAllTasks(newAllTasks);
        }
      });
  };

  const handaleDone = (id) => {
    fetch(`https://partha-task-server.vercel.app/ads/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Container>
      {allTasks.map((allTask) => (
        <AllMyTask
          key={allTask.id}
          allTask={allTask}
          handleDelete={handleDelete}
          handleStatusUpdate={handleStatusUpdate}
          handaleDone={handaleDone}
        ></AllMyTask>
      ))}
    </Container>
  );
};

export default MyTask;
