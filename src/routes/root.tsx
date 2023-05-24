import Main from '../main';
import ErrorPage from "../pages/errorpage";
import Medialist from "../pages/medialist";
import Users from "../pages/users";
import Sliders from "../pages/sliders";
import CreateSlider from "../pages/slider/create";

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
        children: [
          {
            path: "create",
            element: <CreateSlider />
          }
        ]
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;