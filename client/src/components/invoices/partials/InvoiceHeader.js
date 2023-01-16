const InvoiceHeader = ({ handleClickNew, invoices, setFilters, filters }) => {

  const handleClickFilter = (e) => {
    // e.preventDefault();
    // e.stopPropagation()
    console.log(e.target)
    if (e.target.type === "checkbox" || e.target.parentElement.id === "filter-dropdown") return
    let dropdown = document.getElementById("filter-dropdown")
      // dropdown.style.display = "block";
    if (dropdown.style.display == "block") {
       dropdown.style.display = "none";
    } else {
       dropdown.style.display = "block";
    }
  }

  const handleChange = (e, key) => {
    // e.preventDefault();
    e.stopPropagation();
    setFilters({
      ...filters,
      [e.target.value]: !filters[e.target.value]
    })
  }
  console.log(filters)
  return (
    <div className="invoices__header">
      <div className="invoices__header--left">
        <h1>Invoices</h1>
        <p>{invoices?.length} invoices</p>
      </div>

      <div className="invoices__header--right">
        <div
          className="filter__button"
          style={{ cursor: "pointer" }}
          onClick={handleClickFilter}
        >
          <p>Filter</p>
          <img src="/assets/icon-arrow-down.svg" alt="down arrow" />
          <div id="filter-dropdown" className="filter__dropdown">
            {/* <p id="close">x</p> */}
            <label>
              <input
                type="checkbox"
                onChange={handleChange}
                value="draft"
                checked={filters["draft"]}
              />
              Draft
            </label>
            <label>
              <input
                type="checkbox"
                onChange={handleChange}
                value="pending"
                checked={filters["pending"]}
              />
              Pending
            </label>
            <label>
              <input
                type="checkbox"
                onChange={handleChange}
                value="paid"
                checked={filters["paid"]}
              />
              Paid
            </label>
          </div>
        </div>
        <div
          className="new__button new__button--desktop"
          onClick={handleClickNew}
          style={{ cursor: "pointer" }}
        >
          <img src="/assets/icon-plus.svg" alt="plus icon" />
          <p>New</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
