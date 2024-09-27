
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

import BorrowersPage from "./pages/BorrowersPage";

import LenderDashboard from "./pages/LenderDashboard";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>

        <Route index element={<Borrow/>}/>
        {/* <Route path="LenderDAshboard" element={<LenderDashboard/>}/> */}

        <Route index element={<Home/>}/>
        <Route path="/lenderDashboard" element={<LenderDashboard/>}/>

        <Route path="/borrowersDashboard" element={<BorrowersPage/>}/>
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
