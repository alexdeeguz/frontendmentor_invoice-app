import Button from "./Button";

const Status = ({ width }) => {

    const template = () => {
        return width >= 768 ? (
          <div className="card status">
            <div>
              <p>Status</p>
              <div className="tag tag--success">
                <div className="tag__overlay tag__overlay--success"></div>
                <li>Paid</li>
              </div>
            </div>
            <div className="action-buttons">
              <Button title="Edit" backgroundColor="#F9FAFE" color="#7E88C3" />
              <Button title="Delete" backgroundColor="#EC5757" />
              <Button title="Mark as Paid" />
            </div>
          </div>
        ) : (
          <div className="card status">
            <p>Status</p>
            <div className="tag tag--success">
              <div className="tag__overlay tag__overlay--success"></div>
              <li>Paid</li>
            </div>
          </div>
        );
    }
  return (
    <>{template()}</>
  );
};

export default Status;
