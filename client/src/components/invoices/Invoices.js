import "./invoices.css";
import InvoiceListItem from "./InvoicesListItem";
import InvoicesHeader from "./InvoicesHeader";
import MissingData from "./partials/MissingData";

const Invoices = () => {
  return (
    <div>
      <InvoicesHeader />

      {/* <InvoiceListItem /> */}
      <MissingData />
    </div>
  );
};

export default Invoices;
