import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";


function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
