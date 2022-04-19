import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <p className="text-white">
              Disclaimer : The content is for information purposes only and does
              not constitute an offer to avail of any service. Prices mentioned
              are subject to change without notice and properties mentioned are
              subject to availability. Images for representation purposes only.
              This is the official website of authorized marketing partner. We
              may also send updates to the mobile number/email id registered
              with us. All Rights Reserved.
            </p>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled py-2">
              <li><Link to={'/privacy-policy'} className="me-2 text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to={'/terms-and-condition'} className="me-2 text-white text-decoration-none">Terms and Conditions</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
