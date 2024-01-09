import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Mydata } from "../../Data";

const offerArr = Mydata.offerProduct;

export const Offer = () => {
  return (
    <Row className="mt-4">
      <h3 className="text-center">% Special Offers %</h3>
      <div className="col-12">
      <Row className="align-items-stretch justify-content-center gap-3 mt-4">
        {offerArr.map(function (data) {
          return (
            <Card style={{ width: "15rem" }} className="offer-card" key={data.id + 'offer'}>
              <Card.Img variant="top" src={require("../../img/macbook.png")} />
              <Card.Body>
                <h6>
                  {data.caption}
                  <br />
                  <b>{data.title}</b>{" "}
                </h6>
                <div className="text-end">
                  SHOP NOW <i className="fa-regular fa-circle-right"></i>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      </div>
    </Row>
  );
};
