import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import Details from "../Pages/Details/Details";
import CompleteTask from "../Pages/Home/CompleteTask/CompleteTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import Media from "../Pages/Media/Media";
import MyTask from "../Pages/MyTask/MyTask";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/mytask",
        element: <MyTask></MyTask>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://partha-task-server.vercel.app/allTasks/${params.id}`),
      },
      {
        path: "/details",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/completetask",
        element: <CompleteTask></CompleteTask>,
        loader: () => fetch("https://partha-task-server.vercel.app/ads"),
      },
    ],
  },
]);

export default router;
