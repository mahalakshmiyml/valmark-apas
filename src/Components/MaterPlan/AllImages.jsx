import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/floor-plans/master-plan.png";
import Image2 from "../../images/floor-plans/3bhk-3170.png";
import Image3 from "../../images/floor-plans/3bhk-3170-1.png";
import Image4 from "../../images/floor-plans/4bhk-3560.png";

const AllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "3 BHK - 3170 Sqft" },
    { id: 3, imgName: Image3, alt: "", tag: "3 BHK - 3170 Sqft" },
    { id: 4, imgName: Image4, alt: "", tag: "4 BHK - 3560 Sqft" },
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
