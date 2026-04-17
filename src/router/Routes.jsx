import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import FriendDetails from "../pages/FriendDetails/FriendDetails";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/friends/:id", element: <FriendDetails /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);