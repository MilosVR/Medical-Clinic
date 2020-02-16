import React from "react";
import "./TablePrice.scss";
import TablePriceItem from "./TablePriceItem";

const TablePrice = props => {
  return (
    <div className="table_price">
      <div className="container">
        <div className="table_price_headline">
          <h1>
            Price <span>Table</span>
          </h1>
          <p>
            The optimum ratio of price and quality responsibleand conscientious
            approach
          </p>
        </div>
        <div className="table_price_grid">
          <TablePriceItem
            servicePrice={50}
            serviceName={"Diagnostics"}
            serviceDescripion={"Feature laboratory"}
          />
          <TablePriceItem
            servicePrice={150}
            serviceName={"Pediatrics"}
            serviceDescripion={"For kids of 2 years"}
          />
          <TablePriceItem
            servicePrice={200}
            serviceName={"Dental"}
            serviceDescripion={"Our dental services"}
          />
          <TablePriceItem
            servicePrice={300}
            serviceName={"Cardiology"}
            serviceDescripion={"For mans and womans"}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePrice;
