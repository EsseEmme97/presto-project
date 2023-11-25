import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { HomePageLoader } from "./pages/HomePage";
import AdsPage from "./pages/AdsPage";
import AnnouncementPage from "./pages/AnnouncementPage";
import { Outlet } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    id: "main",
    loader: HomePageLoader,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/ads",
        element: <Outlet />,
        children: [
          { index:true, element: <AdsPage /> },
          { path: "/ads/:id", element: <AnnouncementPage /> },
        ],
      },
    ],
  },
]);
