import { Children } from "react";
import App from "../App";
import Bai1 from "../components/Bai1";
import Bai2 from "../components/Bai2";
import Bai3 from "../components/Bai3";
import Home from "../components/Home";
import DetailUser from "../components/DetailUser";

export const elementRoute = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/bai1",
        element: <Bai1 />
      },
      {
        path: "/bai2",
        element: <Bai2 />,
      },
      {
        path: "/bai2/:id",
        element: <DetailUser />,
      },
      {
        path: "/bai3",
        element: <Bai3 />
      }
    ]
  }
]