import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { HomePageLoader } from "./pages/HomePage";
import AdsPage from "./pages/AdsPage";
import AnnouncementPage from "./pages/AnnouncementPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    id: "main",
    loader:HomePageLoader,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/ads",
        element: <AdsPage />,
      },
      {path:"example/example1", element:<h2>prova</h2>}, // riga di errore
      { path: ":id", element: <AnnouncementPage/> },
    ],
  },
]);
