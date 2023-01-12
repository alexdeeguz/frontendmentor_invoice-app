import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details";
import EditForm from "./components/forms/EditForm";
import NewForm from "./components/forms/NewForm";
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
            <Route path="/invoices/new" element={<NewForm />} />
            <Route path="/invoices/:id/edit" element={<EditForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
