import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const GetInTouch = () => {
  const onSubmit = (values) => {
    const data = {
      apikey: "902cb429-2dcc-4176-9958-a8610a354817",
      firstname: values.name,
      lastname: "",
      source: "Mahindra Eden",
      mobile: values.phone,
      CreatedDate: "20/01/2022",
      email: values.email,
      Remark: "Brochure Downloaded",
      HasVisitScheduled: "false",
      VisitDate: "null",
    };

    axios
      .get(
        "https://Valmark-apas.prelaunchprop.in/Email/email.php?sendto=" +
          values.email +
          "&name=" +
          values.name +
          "&phone=" +
          values.phone
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
        axios.post("https://buildeskapi.azurewebsites.net/api/Webhook", data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };
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

  return (
    <div className="py-3 py-md-5" id="get-in-touch">
      <h2 className="text-center text-white">Get in Touch</h2>
      <Container>
        <div className="p-3 text-white rounded">
          <Row className="justify-content-center">
            <Col md={6} className="align-self-center">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form
                  style={{ backgroundColor: "#060606b5" }}
                  className="text-center p-3 p-md-5"
                >
                  <Row className="justify-content-center">
                    <Col md={10}>
                      <div className="mb-5">
                        <Field
                          type="text"
                          className="form-control py-2"
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
                  <Row className="justify-content-center">
                    <Col md={10}>
                      <div className="mb-5">
                        <Field
                          type="email"
                          className="form-control py-2"
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
                  <Row className="justify-content-center">
                    <Col md={10}>
                      <div className="mb-1">
                        <Field
                          type="tel"
                          className="form-control py-2"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                        />
                        <small className="text-danger">
                          <ErrorMessage name="phone" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={10}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={10}>
                      <div className="py-2">
                        <small>
                          By Clicking submit, I agree to the{" "}
                          <Link to="/terms-and-condition" className="text-white">
                            Terms & conditions{" "}
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy-policy" className="text-white">
                            Privacy Policy
                          </Link>{" "}
                          and I am giving my consent to receive updates through
                          sms/email.
                        </small>
                      </div>
                      <div className="mb-3">
                        <Button className="btn btn-primary w-100" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="my-3 my-md-5">
                <div className="text-center">
                  <h2 className="text-white">
                    <i className="fa fa-phone-volume mx-3"></i>/{" "}
                    <i className="fab fa-whatsapp"></i>
                  </h2>
                </div>
                <div className="text-center">
                  <a
                    href="tel:08147203771"
                    className="text-decoration-none fs-3 fw-bold text-white"
                  >
                    +91 81472 03771
                  </a>
                </div>
                <div className="text-center">
                  <h2 className="text-white">
                    <i className="fa-solid fa-envelope"></i>
                  </h2>
                </div>
                <div className="text-center">
                  <a
                    href="mailto:mehul@apnaswarg.com"
                    className="text-decoration-none fs-3 fw-bold text-white"
                  >        mehul@apnaswarg.com         
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
