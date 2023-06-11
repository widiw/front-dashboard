import Main from '../main';
import ErrorPage from "../pages/404";
import Medialist from "../pages/medialist";
import Users from "../pages/users";
import Sliders from "../pages/sliders";
import Dashboard from '../pages/dashboard';
import Login from '../pages/user/login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "medialist",
        element: <Medialist />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "sliders",
        element: <Sliders />,
      },
    ],
  },
  {
    path: "/auth/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;