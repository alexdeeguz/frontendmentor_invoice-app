import "../../css/invoices.css"
import InvoiceListItem from "./partials/InvoicesListItem";
import InvoicesHeader from "./partials/InvoicesHeader";
import MissingData from "./partials/MissingData";

const Invoices = () => {
  return (
    <>
      <InvoicesHeader />

      {/* <InvoiceListItem /> */}
      <MissingData />
    </>
  );
};

export default Invoices;
