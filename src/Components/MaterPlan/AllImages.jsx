import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/floor-plans/master-plan.png";
import Image2 from "../../images/floor-plans/1bhk-medows.png";
import Image3 from "../../images/floor-plans/2bhk-medows.png";
import Image4 from "../../images/floor-plans/3bhk-aqua.png";
import Image5 from "../../images/floor-plans/3bhk-green.png";
import Image6 from "../../images/floor-plans/3bhk-medows.png";
import Image7 from "../../images/floor-plans/floor-plan-wigs-a.png";
import Image8 from "../../images/floor-plans/floor-plan-wigs-b.png";

const AllImages = () => {
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
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} xs={6} key={item.id}>
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

export default AllImages;
