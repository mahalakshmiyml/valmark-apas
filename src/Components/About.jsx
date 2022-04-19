import React, { useState, useEffect} from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import aboutImage from "../images/slider/imag-2.png"
import ContactModal from "./Includes/ContactModal";

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, 7000);
  }, []);

  return (
    <div id="about" className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={4} className="align-self-center">
            <div className="">
              <h2 className="py-2 text-primary text-uppercase">Valmark Apas</h2>
              <ul>
                <li className="lh-lg">Uber luxurious high-rise residential apartments Off Bannerghatta road,Opp to Hulimavu lake.</li>
                <li className="lh-lg">
                  No limit to leisure at the 38,000 sq. ft. clubhouse.
                </li>
                <li className="lh-lg">A Sprawling 22-acres township</li>
                <li className="lh-lg">
                  6-acres of parks in our 22-acre township
                </li>
                <li className="lh-lg">Ample space for green walkways</li>
              </ul>
              <Button variant="primary" onClick={handleShow} className="my-3">
                Download Brochure
              </Button>
            </div>
          </Col>
          <Col md={8}>
            <div className="">
              <Image src={aboutImage} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>

      <ContactModal show={show} handleClose={handleClose} title="Download Brochure"/>
    </div>
  );
};

export default About;
