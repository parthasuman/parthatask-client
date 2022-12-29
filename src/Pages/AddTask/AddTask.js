import React from "react";
import { Container } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const imageHostKey = "e52fd10eb3ef8a3bcd9512d42a6d27a7";

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleAddTask = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const addTask = {
            text: data.yourtask,
            image: imgData.data.url,
          };
          fetch("https://partha-task-server.vercel.app/addTasks", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addTask),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              // toast.success(`${data.name} is added successfully`);
              navigate("/media");
            });
        }
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAddTask)}>
        {/* <input type="text" name="text" placeholder="Enter your task" /> */}
        <input {...register("yourtask")} placeholder="YourTask" />
        <input type="file" {...register("image")} />

        <input value="submit" type="submit" />
      </form>
    </Container>
  );
};

export default AddTask;
