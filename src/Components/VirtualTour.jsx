import React from "react";
import { Col, Container, Ratio, Row } from "react-bootstrap";
import Video1 from "../images/video/video-1.mp4"
import Video2 from "../images/video/video-2.mp4"

const VirtualTour = () => {
  return (
    <div id="virtual-tour" className="py-3 py-md-5 bg-light">
      <Container>
          <h2 className="py-3 text-primary text-center">Virtual Tour</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Ratio aspectRatio="16x9">
              <embed type="image/svg+xml" src={Video1 }/>
            </Ratio>
          </Col>
          <Col md={6}>
            <Ratio aspectRatio="16x9">
              <embed type="image/svg+xml" src={Video2} />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VirtualTour;
