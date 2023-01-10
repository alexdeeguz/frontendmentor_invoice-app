import "../../css/invoices.css"
import InvoiceListItem from "./partials/InvoicesListItem";
import InvoicesHeader from "./partials/InvoicesHeader";
import MissingData from "./partials/MissingData";
import Drawer from "./partials/Drawer";

const Invoices = () => {
  return (
    <div className="relative">
      <Drawer formType="new"/>
      <InvoicesHeader />
      <InvoiceListItem />
      <MissingData />
    </div>
  );
};

export default Invoices;
