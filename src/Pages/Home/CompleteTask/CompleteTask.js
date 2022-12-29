import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CompleteTask = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to deleye: ${user.text}`
    );
    if (agree) {
      // console.log("deleting user with id: ", user._id);
      fetch(`https://partha-task-server.vercel.app/ads/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Task deleted successfully.");
            const remainigUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainigUsers);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <div>
          {displayUsers.map((user) => (
            <p key={user._id}>
              {user.text}
              <button onClick={() => handleDelete(user)}>Delete</button>
              <button>Not Complete</button>
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CompleteTask;
