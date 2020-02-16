import React from "react";

const TablePriceItem = props => {
  return (
    <div className="table_price_grid_item">
      <div className="table_price_grid_item_header">
        <h3>{props.serviceName}</h3>
        <p>{props.serviceDescripion}}</p>
      </div>
      <div className="table_price_grid_item_body">
        <div className="table_price_grid_item_body_price">
          $ {props.servicePrice}
        </div>
        <ul>
          <li>
            <i className="fas fa-check"></i>
            <p>Ultrasound diagnostics</p>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <p>Laboratory diagnostics</p>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <p>X-ray diagnostics scan</p>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <p>Functional diagnostics</p>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <p>Endoscopic diagnostics</p>
          </li>
        </ul>
      </div>
      <button>booking</button>
    </div>
  );
};

export default TablePriceItem;
