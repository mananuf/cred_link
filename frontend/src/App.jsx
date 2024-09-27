
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Root from "./Root";

import BorrowersPage from "./pages/BorrowersPage";

import LenderDashboard from "./pages/LenderDashboard";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
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
