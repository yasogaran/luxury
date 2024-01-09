import React from "react";
import { Row } from "react-bootstrap";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer mt-4">
        <Row className="">
          <TopPart className="bg-dark text-white" />
        </Row>
        <Row className="mx-auto" style={{ maxWidth: 1400 }}>
          <FirstPart className="col-12 col-sm-6 col-md-4 col-lg-3 pt-5" />
          <SecondPart className="col-12 col-sm-6 col-md-3 col-lg-3 pt-5" />
          <ThirdPart className="col-12 col-sm-6 col-md-2 col-lg-3 pt-5" />
          <ForthPart className="col-12 col-sm-6 col-md-3 col-lg-3 pt-5" />
        </Row>
        <Row>
          <BottomPart className="bg-dark text-white" />
        </Row>
      </div>
    </>
  );
};

function FirstPart({ className }) {
  return (
    <>
      <div className={className}>
        <Row>
          <img
            src={require("../../img/logo.png")}
            alt=""
            className="footer-logo"
          />
          <div className="col-12">
            <div className="d-flex align-items-center">
              <h1 className="col">
                <i className="fa fa-headset"></i>
              </h1>
              <div className="col-10">
                <h6>Call us for Assistance</h6>
                <div className="fs-5">(+94) 75 071 000</div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <h6>LUXURYX (pvt) Ltd.</h6>
            <pre>No 525, Union Place, Colombo 2.</pre>
          </div>
          <div></div>
        </Row>
      </div>
    </>
  );
}

function SecondPart({ className }) {
  return (
    <>
      <div className={className}>
        <Row>
          <h6 className="">Top Collections</h6>
          <ul className="list-unstyled footer-list">
            <li>
              <a href="#/action1" className="footer-link">
                iPhone
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                iPad
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                MacBook
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Watches
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Airpods
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Accessories
              </a>
            </li>
          </ul>
        </Row>
      </div>
    </>
  );
}

function ThirdPart({ className }) {
  return (
    <>
      <div className={className}>
        <Row>
          <h6 className="">Usefull Links</h6>
          <ul className="list-unstyled footer-list">
            <li>
              <a href="#/action1" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                Blog
              </a>
            </li>
          </ul>
        </Row>
      </div>
    </>
  );
}

function ForthPart({ className }) {
  return (
    <>
      <div className={className}>
        <Row>
          <h6>Contact us</h6>
          <ul className="list-unstyled footer-list">
            <li>
              <a href="#/action1" className="footer-link">
                <i className="fa fa-phone me-2"></i> 077 112 2334
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                <i className="fa-brands fa-whatsapp me-2"></i> 077 112 2334
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                <i className="fa fa-envelope me-2"></i> luxuryX.info@gmail.com{" "}
              </a>
            </li>
            <li>
              <a href="#/action1" className="footer-link">
                <i className="fa-brands fa-facebook me-2"></i> Luxury X
              </a>
            </li>
          </ul>
        </Row>
      </div>
    </>
  );
}

function BottomPart({ className }) {
  return (
    <>
      <div className={className}>
        <Row>
          <small className="text-center">
            All rights reserved by © LuxuryX 2024
          </small>
        </Row>
      </div>
    </>
  );
}

function TopPart({ className }) {
  return (
    <>
      <div className={className}>
        <Row style={{maxWidth:1400}} className="mx-auto py-2 align-items-center">
          <h6 className="text-center">Show rooms are open (Mon - Sat) 08.00 am to 05.00 pm</h6>
        </Row>
      </div>
    </>
  );
}
