import { useEffect } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const InvoiceListItem = () => {
    const windowSize = useWindowSize()
    const template = () => {  
      const ws = windowSize.width >= 768
      if (ws) {
        return (
          <div className="invoice__item">
            <p className="invoice__item--id">#RT3080</p>
            <p className="invoice__status--date">Due 19 Aug 2021</p>

            <p className="invoice__item--name">Jensen Huang</p>
            <p className="invoice__status--price">$1,800.90</p>
            <div className="tag tag--success">
              <div className="tag__overlay tag__overlay--success"></div>
              <li>Paid</li>
            </div>
          </div>
        )
      } else {
        return (
          <div className="invoice__item">
            <div>
              <p className="invoice__item--id">#RT3080</p>
              <p className="invoice__item--name">Jensen Huang</p>
            </div>

            <div className="invoice__status">
              <div>
                <p className="invoice__status--date">Due 19 Aug 2021</p>
                <p className="invoice__status--price">$1,800.90</p>
              </div>

              <div className="tag tag--success">
                <div className="tag__overlay tag__overlay--success"></div>
                <li>Paid</li>
              </div>
            </div>
          </div>
        );
      }
    };

    return <>{template()}</>;
}

export default InvoiceListItem