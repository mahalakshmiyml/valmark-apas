import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ProjectHighlights = () => {
  return (
    <div id="project-highlights" className="py-3 py-md-5">
        <h2 className="text-center text-primary py-3"> Project Highlights </h2>
        <div className="py-3">
        <Container>
            <Row className="justify-content-center">
                <Col md={2} xs={6} className="py-5 text-center text-white bg-color1"><p className="text-center"><strong>Land Area <br />2.1 Acres</strong></p></Col>
                <Col md={2} xs={6} className="py-5 text-center text-white text-center bg-color2"><p className="text-center"><strong>Total units<br />112 </strong></p></Col>
                <Col md={2} xs={6} className="py-5 text-center text-white bg-color3"><p className="text-center"><strong>Blocks<br /> 2 </strong></p></Col>
                <Col md={2} xs={6} className="py-5 text-center text-white bg-color4"><p className="text-center"><strong>Lifts <br /> 3 Per Block </strong></p></Col>
                <Col md={2} xs={6} className="py-5 text-center text-white bg-color5"><p className="text-center"><strong>No. of Units <br /> 2 units per floor</strong></p></Col>
                
            </Row>
        </Container>
        </div>

    </div>
  )
}

export default ProjectHighlights