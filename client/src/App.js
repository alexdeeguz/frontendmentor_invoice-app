import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details";
import Invoices from "./components/invoices";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Invoices />} />
            <Route path="/invoices/:id" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
