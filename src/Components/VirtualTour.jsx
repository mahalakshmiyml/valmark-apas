import React from "react";
import { Col, Container, Ratio, Row } from "react-bootstrap";

const VirtualTour = () => {
  return (
    <div id="virtual-tour" className="py-3 py-md-5 bg-light">
      <Container>
          <h2 className="py-3 text-primary text-center">Virtual Tour</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Ratio aspectRatio="16x9">
              <embed type="image/svg+xml" src="https://i3dvirtualtour.com/tour/assetz/marq2_4bhk#" />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VirtualTour;
