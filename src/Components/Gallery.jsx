import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../images/gallery/image-1.png";
import Image2 from "../images/gallery/image-2.png";
import Image3 from "../images/gallery/image-3.png";
import Image4 from "../images/gallery/image-4.png";
import Image5 from "../images/gallery/image-5.png";
import Image6 from "../images/gallery/image-6.png";
import Image7 from "../images/gallery/image-7.png";
import Image8 from "../images/gallery/image-8.png";

const Gallery = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "" },
    { id: 2, imgName: Image2, alt: "", tag: "" },
    { id: 3, imgName: Image3, alt: "", tag: "" },
    { id: 4, imgName: Image4, alt: "", tag: "" },
    { id: 5, imgName: Image5, alt: "", tag: "" },
    { id: 6, imgName: Image6, alt: "", tag: "" },
    { id: 7, imgName: Image7, alt: "", tag: "" },
    { id: 8, imgName: Image8, alt: "", tag: "" },
  ];

  

  return (
    <div>
      <div id="gallery" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <h2 className="text-center text-primary">Gallery</h2>
          {/* <div className="p-2 text-center d-flex flex-row justify-content-center">
          <h2 className="text-center"> Coming Soon</h2>
            <div className="m-1">
              <TagButton name="all" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="Interior-design" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="Constructions" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="three" handlesettag={setTag} />
            </div>
          </div> */}
          <SimpleReactLightbox>
            <SRLWrapper>
              <Row className="g-3">
                {images.map((item) => (
                  <Col md={3} xs={6} key={item.id}>
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
    </div>
  );
};

export default Gallery;
