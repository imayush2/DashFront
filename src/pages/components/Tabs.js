import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
  Alert,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for sending HTTP requests

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

export default () => {
  const [name, setName] = useState(""); // Added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [users, setUsers] = useState([]); // State for storing list of users
  const [isFormVisible, setFormVisible] = useState(false); // State for toggling form visibility

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // Basic form validation
    if (!name || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Password validation: Ensure it's at least 6 characters long
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      // Send POST request to your backend API to register the user
      const response = await axios.post(
        "http://localhost:4100/api/auth/register", // Replace with your backend endpoint
        {
          name,
          email,
          password,
          role: "user", // Set role as "user" by default
        }
      );

      if (response.data.success) {
        setSuccessMessage("Registration successful!");

        // Add the new user to the users list in the state
        setUsers([...users, { name, email, password }]);

        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage(
          response.data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Registration failed");
      } else {
        setErrorMessage(
          "An error occurred while registering. Please try again."
        );
      }
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.DashboardOverview.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Manage Users</h3>
                </div>

                {/* Display error or success messages */}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                {successMessage && (
                  <Alert variant="success">{successMessage}</Alert>
                )}

                {/* Button to toggle the form */}
                <Button
                  variant="primary"
                  onClick={toggleFormVisibility}
                  className="w-100 mb-3"
                >
                  {isFormVisible ? "Cancel" : "Add User"}
                </Button>

                {/* If the form is visible, display the form */}
                {isFormVisible && (
                  <Form className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group id="name" className="mb-4">
                      <Form.Label>Your Name</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Your Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder="example@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <FormCheck type="checkbox" className="d-flex mb-4">
                      <FormCheck.Input id="terms" className="me-2" />
                      <FormCheck.Label htmlFor="terms">
                        I agree to the{" "}
                        <Card.Link>terms and conditions</Card.Link>
                      </FormCheck.Label>
                    </FormCheck>

                    <Button variant="primary" type="submit" className="w-100">
                      Add user
                    </Button>
                  </Form>
                )}

                {/* Display the list of users */}
                <div className="mt-4">
                  <h4>Added Users</h4>
                  <ul>
                    {users.length === 0 ? (
                      <li>No users added yet.</li>
                    ) : (
                      users.map((user, index) => (
                        <li key={index}>
                          {user.name} - {user.email}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
