import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/floor-plans/floor-plan-wigs-a.png";
import Image2 from "../../images/floor-plans/floor-plan-wigs-b.png";

const FloorPlanImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "" },
    { id: 2, imgName: Image2, alt: "", tag: "" },
  ];
  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {images.map((item) => (
                <Col md={6} key={item.id}>
                  <div className="m-1 text-center border rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default FloorPlanImages;
