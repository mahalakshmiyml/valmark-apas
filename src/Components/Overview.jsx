import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Overview = () => {
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
        "https://valmark-apas.prelaunchprop.in/Email/email.php?sendto=" +
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
    <div id="overview" className="py-3 py-md-5 bg-light">
      <Container>
        <Row>
          <Col md={8}>
            <h2 className="text-center text-primary py-3">
              About Mahindra - Eden
            </h2>
            <div className="p-3 rounded">
              <p>Uber luxurious high-rise residential apartments Off Bannerghatta road,Opp to Hulimavu lake.
</p>
              <p>Combinations of 3 & 4 BHKs of 3170 & 3560 sft respectively Thoughtfully designed in a way every house can view the sunrise and sunset, with breathtaking views of the Hulimavu lake.
</p>
              <p>
              2 basements, ground + 28 upper floors, 12000 sft of clubhouse on the ground floor  comprising of all the indoor amenities you can think of.</p>
              <p>Homes come with false ceiling , centralised AC, home automation, Italian marble,wooden flooring in master bedroom and high-end fixtures.
</p>
<p>Good quality of  construction with mivan technology for all external walls and block masonry internal walls.</p>
<p> Customizable homes, location just 1.5 KM from Bannerghatta Main road. </p>
<p>breathtaking view of Hulimavu lake with individual unit balconies facing east and west allowing natural light and ventilation inside the apartment all through the day. Since there are only two units per floor, there is complete privacy within the unit. None of the areas within the apartment are exposed with neighbouring units.</p>
<h5>To sum it up Valmark Apas is " luxurious inside with mesmerizing views outside"</h5>
<p>To book your home at special price, call .......<br />
Rush... as this offer is for limited number of bookings and time.</p>

            </div>
          </Col>
          <Col md={4}>
            <div className="p-3 bg-dark text-white rounded">
              <div className="py-3">
                <h2 className="text-center py-2">Schedule Site Visit</h2>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Row>
                    <Col md={12}>
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
                  <Row>
                    <Col md={12}>
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
                  <Row>
                    <Col md={12}>
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
                      <div className="py-2">
                        <small>
                           By Clicking submit, I agree to the{" "}
                          <Link to="/terms-and-condition" className="text-white">Terms & conditions </Link>{" "}
                          and <Link to="/privacy-policy" className="text-white">Privacy Policy</Link> and I
                          am giving my consent to receive updates through
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
