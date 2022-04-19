import React, { useState } from "react";
import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ContactModal from "./Includes/ContactModal";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="pricing" className="bg-light py-3 py-md-5">
      <h2 className="text-center text-primary"> Pricing</h2>
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant="pills"
                      className="flex-row justify-content-center py-3"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">3BHK</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">3BHK</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">4BHK</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">4BHK</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content className="py-3">
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Type</p>
                              <h2 className="py-1">3 BHK</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Built-Up Area</p>
                              <h2 className="py-1">3035 Sqft</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Price</p>
                              <h2 className="py-1">28L Onwords*</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Cost Sheet</p>
                              <h2 className="py-1">
                                <Button
                                  variant="primary"
                                  onClick={handleShow}
                                  className=""
                                >
                                  Download Price Sheet
                                </Button>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Type</p>
                              <h2 className="py-1">3 BHK</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Built-Up Area</p>
                              <h2 className="py-1">3,170 Sqft</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Price</p>
                              <h2 className="py-1">29L Onwords*</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border-none">
                              <p className="text-center fs-4">Cost Sheet</p>
                              <h2 className="py-1">
                                <Button
                                  variant="primary"
                                  onClick={handleShow}
                                  className=""
                                >
                                  Download Price Sheet
                                </Button>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Type</p>
                              <h2 className="py-1">4 BHK</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Built-Up Area</p>
                              <h2 className="py-1">3,375 Sqft</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Price</p>
                              <h2 className="py-1">31L Onwords*</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border-none">
                              <p className="text-center fs-4">Cost Sheet</p>
                              <h2 className="py-1">
                                <Button
                                  variant="primary"
                                  onClick={handleShow}
                                  className=""
                                >
                                  Download Price Sheet
                                </Button>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                      <Row>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Type</p>
                              <h2 className="py-1">4 BHK</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Built-Up Area</p>
                              <h2 className="py-1">3,560 Sqft</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border my-2 rounded">
                              <p className="text-center fs-4">Price</p>
                              <h2 className="py-1">33L Onwords*</h2>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="px-3 text-center border-none">
                              <p className="text-center fs-4">Cost Sheet</p>
                              <h2 className="py-31">
                                <Button
                                  variant="primary"
                                  onClick={handleShow}
                                  className=""
                                >
                                  Download Price Sheet
                                </Button>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>

            {/* <div className="py-3">
              <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>BHK</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1 BHK
                      <br />
                    </td>
                    <td>600</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>2 BHK </td>
                    <td>1200</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr> 
                    <td>3 BHK</td>
                    <td>1600 to 1800</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3BHK+ Study</td>
                    <td>2000</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div> */}
          </Col>
        </Row>
      </Container>

      <ContactModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
      />
    </div>
  );
};

export default Pricing;
