import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./components/invoices";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
