import React from "react";
import {
  Col,
  Container,
  Row,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Tabs,
} from "react-bootstrap";

const Configuration = () => {
  return (
    <div id="configuration" className="py-3 py-md-5 bg-light">
      <h2 className="text-center text-primary">Configuration</h2>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="3bhk" title="3 BHK">
                  <TabContainer>
                      <TabContent>
                        <TabPane>
                            <h6>Type</h6>
                        </TabPane>
                      </TabContent>
                  </TabContainer>
                </Tab>
                <Tab eventKey="3bhk" title="3 BHK"></Tab>
                <Tab eventKey="3nom bhk" title="3 BHK"></Tab>
                <Tab eventKey="3bhk+study" title="3 BHK + Study"></Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Configuration;
