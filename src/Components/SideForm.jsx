import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SideForm = () => {
  const [cssClass, setcssClass] = useState("stickyForm rounded active");
  const [btnName, setBtnName] = useState("Close Button");
  const FormClick = (e) => {
    e.preventDefault();
    if (cssClass === "stickyForm rounded") {
      setcssClass("stickyForm rounded active");
      setBtnName("Close Button");
    } else {
      setcssClass("stickyForm rounded");
      setBtnName("Enquire Now");
    }
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

  const onSubmit = (values) => {
    const data = values;

    console.log(data);

    axios
      .get(
        "email.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };
  return (
    <div id="side-contact-form" className="">
      <div className={cssClass} id="" autoComplete="off">
        <button className="btn btn-hello" onClick={FormClick}>
          {btnName}
        </button>
        <div id="stickForm" className="form_sticky">
          <p className="text-center text-white text-capitalize">
            <strong>
              Register here and avail <br />
              the <span className="text-danger">best Offers!!</span>
            </strong>{" "}
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Row>
                <Col md={12}>
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
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
              <Row>
                <Col md={12}>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
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
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone No
                    </label>
                    <Field
                      type="tel"
                      className="form-control"
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
              <Row>
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={12}>

                  <div className="">
                  <p className="text-white"> By Clicking submit, I agree to the <a href="/terms-and-condition">Terms & conditions </a> and <a href="/privacy-policy">Privacy Policy</a> and I am giving my consent to receive updates through sms/email.</p>
                    <Button className="btn btn-primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SideForm;
