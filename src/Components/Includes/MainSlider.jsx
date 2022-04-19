import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import Image1 from "../../images/slider/image-1.png";
import Image2 from "../../images/slider/imag-2.png";
import Image3 from "../../images/slider/image-3.png";
import ContactModal from "./ContactModal";

const MainSlider = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SlidingImages = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
    },
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
    },
  ];
  return (
    <>
      <Carousel>
        {SlidingImages.map((image) => (
          <Carousel.Item interval={3000} key={image.id}>
            <img
              className="d-block w-100"
              src={image.ImageUrl}
              alt={image.alt}
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>

      <div id="custom-content" className="d-block d-md-none" style={{backgroundColor: "#060606d5"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ps-0 pe-0">
              <h2 className="text-center text-white p-2 text-uppercase">
                <Button
                  onClick={handleShow}
                  className="my-2 bg-secondary border-0 fs-4 w-100 fw-bold text-uppercase"
                >
                  Booking Open
                </Button>
              </h2>
              <h1 className="text-center text-white text-uppercase">
                Valmark Apas
              </h1>
              <h3 className="text-danger">
                {/* Pre-Launching Purva Sparkling Springs Phase-2 */}
              </h3>
              <div className="p-3 text-white">
                <ul className="">
                  <li className="py-1">Off Bannerghatta Road, Bangalore.</li>
                  <li className="py-1">Residential Apartments</li>
                  <li className="py-1">3 & 4 BHK</li>
                  <li className="py-1">Under Construction</li>
                </ul>
                <div className="text-center">
                  <Button
                    onClick={handleShow}
                    className="my-2 bg-danger w-100 border-0 fw-bold text-uppercase"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="desktop-content" className="d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="wraper position-absolute p-3">
                <Button
                  onClick={handleShow}
                  className="bg-dark border-0 fs-2 text-danger fw-bold text-uppercase w-100"
                >
                  Booking Open
                </Button>
                <h1 className="text-center text-white mb-0 py-2 text-uppercase">
                  Mahindra Eden
                </h1>
                <div className="text-white py-2">
                  <ul className="">
                    <li className="py-1">Off Bannerghatta Road, Bangalore.</li>
                    <li className="py-1">Residential Apartments</li>
                    <li className="py-1">3 & 4 BHK</li>
                    <li className="py-1">Under Construction</li>
                  </ul>
                  <div className="text-center">
                    <Button
                      onClick={handleShow}
                      className="my-2 bg-danger border-0 w-100 py-3 text-uppercase"
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
      />
    </>
  );
};

export default MainSlider;
