import React from "react";
import { Row } from "react-bootstrap";

export const Categories = () => {
  return (
    <>
      <Row>
        {/* CARD */}
        <div className="col-3">
          <Row className="border rounded-2 align-items-center p-2">
            <div className="col-8">
              <h5>iPhone</h5>
              <h6>9 Products</h6>
            </div>
            <div className="col-4">
              <img
                src={require("../../img/iphone.svg").default}
                alt="Phone"
                className="img-fluid"
              />
            </div>
          </Row>
        </div>
      </Row>
    </>
  );
};
