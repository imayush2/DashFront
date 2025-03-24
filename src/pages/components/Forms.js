import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Card,
  Spinner,
} from "@themesberg/react-bootstrap";

export default () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  // All diseases
  const diseases = [
    "Liver cancer",
    "Diabetes",
    "Hypertension",
    "Asthma",
    "COVID-19",
    "Tuberculosis",
    "Hepatitis",
  ];

  // Handle disease selection (checkbox change)
  const handleDiseaseChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedDiseases([...selectedDiseases, value]);
    } else {
      setSelectedDiseases(
        selectedDiseases.filter((disease) => disease !== value)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start the loader

    try {
      const response = await fetch("http://51.21.243.123:5001/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedDiseases }),
      });

      const result = await response.json(); // Parse the JSON response

      if (response.ok) {
        console.log("Scraping completed successfully:", result.message);
      } else {
        console.error("Error during scraping:", result.error);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  return (
    <article>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="w-100">
          <Col md={8} lg={6} className="mx-auto">
            {/* Card for the form */}
            <Card className="shadow-lg border-light">
              <Card.Body>
                <div className="text-center mb-4">
                  <h1>Select Disease(s)</h1>
                  <p>Select diseases directly from the list below.</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {/* Disease Type Multi-Select with Checkboxes */}
                  <Form.Group className="mb-3">
                    <Form.Label>Select Disease(s)</Form.Label>
                    {diseases.map((disease, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`disease-${index}`}
                        label={disease}
                        value={disease}
                        checked={selectedDiseases.includes(disease)}
                        onChange={handleDiseaseChange}
                      />
                    ))}
                  </Form.Group>

                  {/* Display Selected Diseases */}
                  <div className="mt-3">
                    <h5>Selected Disease(s):</h5>
                    <ul>
                      {selectedDiseases.map((disease, index) => (
                        <li key={index}>{disease}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={selectedDiseases.length === 0 || loading} // Disable the button when loading or no diseases selected
                    className="w-100"
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </article>
  );
};
