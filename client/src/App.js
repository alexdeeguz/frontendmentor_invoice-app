import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "./components/invoices/Details";
import EditInvoice from "./components/invoices/EditInvoice";
import NewInvoice from "./components/invoices/NewInvoice";
import Invoices from "./components/invoices/Invoices";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:id" element={<Details />} />
        <Route path="/invoices/:id/:action" element={<EditInvoice />} />
        <Route path="/invoices/new" element={<NewInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
