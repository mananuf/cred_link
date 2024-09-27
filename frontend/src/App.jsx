
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LenderDashboard from "./Components/LenderDashboard";
import Root from "./Root";
import Borrow from "./Components/Borrow";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Borrow/>}/>
        {/* <Route path="LenderDAshboard" element={<LenderDashboard/>}/> */}
      </Route>

    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
