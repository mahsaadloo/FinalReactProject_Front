import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import Start from "./Start";
import HomeTwo from "./StartTwo";
import HomeThree from "./StartThree";
import HomeFour from "./StartFour";
import SetProfile from "./SetProfile";
import ShowProfile from "./ShowProfile";
import SetPassword from "./SetPassword";
import ShouldLogin from "./ShouldLogin";
import Login from "./Login";
import Home from "./Home";
import Favorites from "./Favorites";

// eslint-disable-next-line react-refresh/only-export-components
export const instance = axios.create({
  baseURL: "http://127.0.0.1:3001",
  headers: {
    Authorization: Cookies.get("token"),
  },
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.assign("/Login");
    }
    return Promise.reject(error.message);
  }
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/ShowProfile/:id",
        element: <ShowProfile />,
      },
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/HomeTwo",
        element: <HomeTwo />,
      },
      {
        path: "/HomeThree",
        element: <HomeThree />,
      },
      {
        path: "/HomeFour",
        element: <HomeFour />,
      },
      {
        path: "/ShouldLogin",
        element: <ShouldLogin />,
      },
      {
        path: "/SetProfile",
        element: <SetProfile />,
      },
      {
        path: "/SetPassword",
        element: <SetPassword />,
      },
      {
        path: "/Favorites",
        element: <Favorites />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
