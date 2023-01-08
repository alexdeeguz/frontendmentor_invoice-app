import { BrowserRouter, Routes, Route } from "react-router-dom"
import Invoices from "./components/invoices/Invoices";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
