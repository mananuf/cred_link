
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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<LenderDashboard/>}/>
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
