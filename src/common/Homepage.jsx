import React from "react";
import Header from "./header/Header";
import { Row, Button, Badge } from "react-bootstrap";
import { Banner } from "./home/Banner";
import { Offer } from "./home/Offer";
import "./home.css";
import { Footer } from "./footer/Footer";
import { Mydata } from "../Data";

const Homepage = () => {
  return (
    <>
      <div className="container-fluid home">
        <Header />
        <Row className="align-items-center mt-2">
          <Banner />
          <Offer />
          <Phones />
          <BankingPartner />
          <MacBook />
          <Watch />
          <div className="bg-dark py-3 mt-5">
            <Services />
          </div>
          <Phones />
          <Footer />
        </Row>
      </div>
    </>
  );
};

export default Homepage;

function BankingPartner() {
  return (
    <>
      <div className="mt-5 p-5">
        <Row className="justify-content-center">
          {/* <h1 className="text-center">0% Installment Credit Card offers</h1> */}
          <img
            src="http://localhost:80/luxuryx/instbanner.png"
            alt=""
            style={{ maxWidth: 1200 }}
          />
        </Row>
      </div>
    </>
  );
}

// PRODUCT SECTION
function Phones() {
  return (
    <>
      <div className="mt-5">
        <div className="col-12 py-2">
          <h3 className="text-center">iPhone</h3>
          <h6 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            harum.
          </h6>
        </div>
        <Row className="justify-content-center gap-4 align-items-center mt-4">
          {Mydata.homepageProduct.iphone.map((phone) => {
            return ProductCard(phone);
          })}
        </Row>
      </div>
    </>
  );
}

function MacBook() {
  return (
    <>
      <div className="mt-5">
        <h3 className="text-center">MacBook</h3>
        <h6 className="text-center">
          Experience the M series with the latest macbooks
        </h6>
        <Row className="justify-content-center gap-4 align-items-center mt-4">
          {Mydata.homepageProduct.macbook.map((macbook) => {
            return ProductCard(macbook);
          })}
        </Row>
      </div>
    </>
  );
}

function Watch() {
  return (
    <>
      <div className="mt-5">
        <h3 className="text-center">Watches</h3>
        <h6 className="text-center">Assitant with every moments</h6>
        <Row className="justify-content-center gap-4 align-items-center mt-4">
          {Mydata.homepageProduct.watch.map((watch) => {
            return ProductCard(watch);
          })}
        </Row>
      </div>
    </>
  );
}

function ProductCard({ id, title, image, badges = [], price }) {
  if (id && title && image && badges && price) {
    return (
      <>
        <div
          style={{
            width: "14rem",
          }}
          className="product-card"
        >
          <div className="product-card-hover">
            <Button variant="outline-danger">
              <i className="fa fa-heart"></i>
            </Button>
            <Button variant="outline-warning">
              <i className="fa fa-shop"></i>
            </Button>
          </div>

          <img
            variant="top"
            src={image}
            style={{ maxHeight: 200 }}
            alt="iphone 12"
          />
          <div>
            <div className="d-flex gap-2 mt-2">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h6 className="mt-2">{createBadge(badges)}</h6>
            <h4>{title}</h4>
            <h5 className="mt-2">{addCommas(price)} LKR</h5>
            <div className="d-grid">
              <Button variant="outline-secondary" className="">
                <i className="fa fa-eye"></i> View Product
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function createBadge(badges) {
    if (badges.length == 0) {
      throw "undefined";
    }
    let a = [];
    badges.forEach((obj) => {
      a.push(
        <>
          <Badge className="ms-1">{obj.name}</Badge>
        </>
      );
    });
    return a;
  }

  function addCommas(number) {
    let numberString = String(number);
    let formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber;
  }
}

function Services() {
  return (
    <>
      <Row className="justify-content-center">
        <div
          className="col-9 col-sm-12 border rounded-3 bg-white"
          style={{ maxWidth: 1400 }}
        >
          <Row className="align-items-center justify-content-around">
            {generateCard({
              icon: "fa fa-shipping-fast",
              title: "Shipping",
              description: "Career information",
            })}
            {generateCard({
              icon: "fa fa-clock",
              title: "Online Payment",
              description: "Payment methods",
            })}
            {generateCard({
              icon: "fa fa-headset",
              title: "24 /7 Support",
              description: "Unlimited Help desk",
            })}
            {generateCard({
              icon: "fa-solid fa-user-shield",
              title: "100% Safe",
              description: "Lot of Benifits",
            })}
            {generateCard({
              icon: "fa-solid fa-arrow-rotate-left",
              title: "Free return",
              description: "Track or cancel orders",
            })}
          </Row>
        </div>
      </Row>
    </>
  );

  function generateCard({ icon, title, description }) {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-xl-2 mt-3 p-2">
        <Row>
          <h1 className="col-3 text-center">
            <i className={icon}></i>
          </h1>
          <div className="col-9">
            <h6>{title}</h6>
            <small>{description}</small>
          </div>
        </Row>
      </div>
    );
  }
}
