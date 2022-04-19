import React, { useState } from "react";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png";
import { Link } from "react-router-dom";

const ContactModal = (props) => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    let data = values;

    console.log(data);

    axios
      .get(
        "https://valmark-apas.prelaunchprop.in/Email/email.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
        axios.post(
          "https://buildeskapi.azurewebsites.net/api/Webhook",
          (data = {
            apikey: "902cb429-2dcc-4176-9958-a8610a354817",
            firstname: data.name,
            lastname: "",
            source: "Mahindra Eden",
            mobile: data.phone,
            CreatedDate: "14/02/2022",
            email: data.email,
            Remark: "Brochure Downloaded",
            HasVisitScheduled: "false",
            VisitDate: "null",
          })
        );
      })
      .catch(function (error) {
        // console.log(error);
        setformStatus(error.data);
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-primary">
          <Modal.Title className="text-white text-titlecase border-0">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center py-3">
            <Image src={Logo} alt="" className="img-fluid" />
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="p-3">
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="name" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="mb-1">
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                <div className="py-2">
                        <small>
                          * By Clicking submit, I agree to the{" "}
                          <Link to="/terms-and-condition" className="text-dark">Terms & conditions </Link>{" "}
                          and <Link to="/privacy-policy" className="text-dark">Privacy Policy</Link> and I
                          am giving my consent to receive updates through
                          sms/email.
                        </small>
                      </div>
                  <div className="">
                    <Button
                      className="btn btn-success text-white text-uppercase form-control"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
