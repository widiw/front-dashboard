import Main from '../main';
import ErrorPage from "../pages/404";
import Medialist from "../pages/medialist";
import Users from "../pages/users";
import Sliders from "../pages/sliders";
import Dashboard from '../pages/dashboard';

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
        path: "home",
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
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;