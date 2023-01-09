import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "./components/invoices/Details";
import Invoices from "./components/invoices/Invoices";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/invoices" element={<Invoices />}/>
        <Route path="/invoices/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
