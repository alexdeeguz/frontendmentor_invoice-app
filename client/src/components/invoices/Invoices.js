import "./invoices.css";
import InvoiceListItem from "./InvoicesListItem";
import InvoicesHeader from "./InvoicesHeader";

const Invoices = () => {
  return (
    <div>
      <InvoicesHeader />

      <InvoiceListItem />
    </div>
  );
};

export default Invoices;
