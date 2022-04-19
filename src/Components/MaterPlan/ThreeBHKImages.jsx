import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/floor-plans/3bhk-3170.png";
import Image2 from "../../images/floor-plans/3bhk-3170-1.png";
const ThreeBHKImages = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "3 BHK - 3170 Sqft" },
    { id: 2, imgName: Image2, alt: "", tag: "3 BHK - 3170 Sqft" },
  ];

  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {ThreeBHKImages.map((item) => (
                <Col md={6} xs={6} key={item.id}>
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

export default ThreeBHKImages;
