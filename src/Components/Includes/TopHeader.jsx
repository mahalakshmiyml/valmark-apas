import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import logo from "../../images/first-logo.png";

const TopHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      id="navbar"
      className="shadow-sm sticky-top bg-white"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="" className="img-fluid" />
        </Navbar.Brand>
        <Nav.Link
          className="btn-sm btn-success text-white d-block d-md-none"
          href="tel:08147203771"
        ><i className="fa fa-phone-volume"></i> 81472 03771
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#overview">Overview</Nav.Link>
            <Nav.Link href="#master-plan">Master Plan</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* <Nav.Link href="#virtual-tour">Virtual Tour</Nav.Link> */}
            <Nav.Link href="#location">Location</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="btn-sm btn-success text-white"
              href="tel:08147203771"
            ><i className="fa fa-phone-volume"></i> + 91 8147203771
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
