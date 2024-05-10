import React, { useState } from "react";
import { Row,  Offcanvas, Button } from "react-bootstrap";
import "./header.css";

// IMAGES
// import Logo from "./src/img/logowithapple.png";
const Header = () => {
  return (
    <>
      <Row>
        <HeaderMobile />
        <HeaderTop />
        <HeaderMid />
        <HeaderBottom />
      </Row>
    </>
  );
};

export default Header;

// TOP HEADER
function HeaderTop({ msg, phone0, phone1, address }) {
  return (
    <>
      <div className="header-top pt-2">
        <div className="container">
          <Row className="align-items-center justify-content-between">
            {/* CONTACT INFO */}
            <Row className="d-none d-md-flex col-md-6 col-lg-5 text-center text-white justify-content-around">
              <small className="header-info col-7">
                <i className="fa fa-location"></i> luxury.info@gmail.com
              </small>
              <small className="header-info col-5">
                <i className="fa fa-phone"></i> 0774559458
              </small>
            </Row>
            {/* MENU LINKS */}
            <div className="list-unstyled col-md-6 d-flex align-items-center justify-content-center justify-content-md-end nav-list">
              <div>
                <small className="header-link">Home</small>
              </div>
              <div>
                <small className="header-link">Blogs</small>
              </div>
              <div>
                <small className="header-link">Contact</small>
              </div>
              <div>
                <small className="header-link">FAQ</small>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}

function HeaderMid() {
  return (
    <>
      <div className="header-mid">
        <div className="container">
          <Row className="align-items-center justify-content-between">
            {/* LOGO */}
            <div className="col-12 col-md-12 col-lg-3 ps-4">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../../img/logowithapple.png")}
                  alt="LUXURY X"
                  className="img-fluid brand-logo"
                />
              </div>
            </div>
            {/* SEARCH BOX */}
            <div className="col-12 col-md-7 col-lg-6">
              <SearchBox />
            </div>
            {/* USER SECTION */}
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <div className="d-flex justify-content-end">
                <button className="mx-3 btn btn-danger">
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button className="mx-3 btn btn-warning">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button className="mx-3 btn btn-light">
                  <i className="fa-solid fa-user"></i>
                </button>
              </div>
            </div>
            {/* END */}
          </Row>
        </div>
      </div>
    </>
  );
}

function SearchBox() {
  return (
    <>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search...." />
        <span className="input-group-text" id="">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </>
  );
}

// function HeaderBottom() {
//   return (
//     <>
//       <Row className="header-bottom">
//         <div className="col-sm-4 col-md-4 col-lg-3 col-xxl-2 d-flex align-items-center  justify-content-streatch">
//           <Dropdown size="sm" className="">
//             <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
//               <i className="fa fa-dashboard"></i> Shop products
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">iPhone</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">MacBook</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">iPad</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Watch</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Airpod</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </Row>
//     </>
//   );
// }

function HeaderBottom() {
  return (
    <>
      <Row className="align-items-center justify-content-center header-bottom mt-2">
        <div className="w-auto header-bottom-content">
          <Button size="">iPhone</Button>
          <Button size="">MacBook</Button>
          <Button size="">iPad</Button>
          <Button size="">AirPod</Button>
          <Button size="">Watch</Button>
          <Button size="">Accessories</Button>
        </div>
      </Row>
    </>
  );
}

function HeaderMobile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // FOR SEARCH BOX
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(showSearch === true ? false : true);
  };
  return (
    <>
      <div className="col-12 header-mobile">
        <Button
          variant="secondary"
          onClick={handleShow}
          className="header-mobile-button-one"
        >
          <i className="fa fa-bars"></i>
        </Button>
        <div className="d-flex justify-content-cente col-6r">
          <img
            src={require("../../img/logowithapple.png")}
            alt="LUXURY X"
            className="img-fluid mobile-brand-logo"
          />
        </div>
        <Button
          variant="secondary"
          onClick={toggleSearch}
          className="header-mobile-button-one"
        >
          <i className="fa fa-search"></i>
        </Button>
      </div>
      <div className="col-12 bg-black">
        {showSearch === true ? (
          <Row className="align-items-center py-3 mobile-search-box">
            {" "}
            <SearchBox />{" "}
          </Row>
        ) : null}
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ maxWidth: 240 }}
        className="bg-dark"
      >
        <Offcanvas.Header closeButton>Menu</Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile-nav-container">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <a href="index.html" className="mobile-nav-link">
                  Home
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  Blog
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  Contact
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  FAQ
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  iPhone
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  MacBook
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  iPad
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  Watch
                </a>
              </li>
              <li className="mobile-nav-item">
                <a href="$/action1" className="mobile-nav-link">
                  Other 
                </a>
              </li>

            </ul>

            <ul className="mobile-nav-list">
              <li>
                <div className="d-flex justify-content-end mt-3">
                  <button className="mx-3 btn btn-danger">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <button className="mx-3 btn btn-warning">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  <button className="mx-3 btn btn-light">
                    <i className="fa-solid fa-user"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
