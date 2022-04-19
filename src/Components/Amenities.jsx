import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Amenities = () => {
  return (
    <div id="amenities" className="py-3 py-md-5">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-primary text-center py-2"> Amenities</h2>
          <Col md={12} className="pt-3 pb-3 pt-md-2 pb-md-2">
            {/* <h4 className="text-primary">Indoor Amenities</h4> */}
            <Row className="justify-content-center">
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-building-columns fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Multipurpose Hall
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-table-tennis-paddle-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Squash Court</h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-spa fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Spa</h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-photo-film fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Mini theatre</h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-building-user fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Guest Room</h6>
                </div>
              </Col>            
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-dumbbell fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Indoor Gym with Aerobics Zone
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-book-open fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Library & business lounge
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-chess-board fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    <i className=""></i>
                    Indoor Games Room
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                  <i className="fa-solid fa-store fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Provision For Convenience store
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div
                  className="text-center bg-primary rounded p-4" style={{ height: "150px" }}
                >
                  <i className="fas fa-baseball-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Badminton court
                  </h6>
                </div>
              </Col>
              
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div
                  className="text-center bg-primary rounded p-4"
                  style={{ height: "150px" }}
                >
                  <i className="fas fa-baseball-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Badminton court
                  </h6>
                </div>
              </Col>
              
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div
                  className="text-center bg-primary rounded p-4"
                  style={{ height: "150px" }}
                >
                  <i className="fas fa-baseball-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    Badminton court
                  </h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Amenities;
