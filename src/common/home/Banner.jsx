import React from "react";
import { Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <>
      <div className="col-12">
        <Row className="bg-black">
          <Row className="justify-content-center">
            <video
              src="http://localhost/luxuryx/banner001.mp4"
              autoPlay={true}
              loop={true}
              muted
              style={{ maxHeight: 800 }}
              className="img-fluid"
            ></video>
          </Row>
        </Row>
      </div>
    </>
  );
};
