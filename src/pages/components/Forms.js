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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  // Predefined disease categories and related diseases
  const diseaseCategories = {
    Chronic: ["Diabetes", "Hypertension", "Asthma"],
    Acute: ["Flu", "Pneumonia", "Gastroenteritis"],
    Infectious: ["COVID-19", "Tuberculosis", "Hepatitis"],
    Genetic: ["Cystic Fibrosis", "Sickle Cell Anemia", "Down Syndrome"],
    Autoimmune: ["Rheumatoid Arthritis", "Lupus", "Multiple Sclerosis"],
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedDiseases([]); // Clear previously selected diseases
  };

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

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start the loader

    // Simulate a delay for the loading spinner
    setTimeout(() => {
      setLoading(false); // Stop the loader after submission is complete
      console.log("Selected Diseases:", selectedDiseases);
    }, 2000); // Simulating a 2-second delay
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
                  <h1>Select Disease Type</h1>
                  <p>Select a disease category and choose related diseases.</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {/* Disease Category Dropdown */}
                  <Form.Group className="mb-3">
                    <Form.Label>Select Disease Category</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleCategoryChange}
                      value={selectedCategory}
                    >
                      <option value="">Choose a disease category</option>
                      {Object.keys(diseaseCategories).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  {/* Disease Type Multi-Select with Checkboxes (only visible if a category is selected) */}
                  {selectedCategory && (
                    <Form.Group className="mb-3">
                      <Form.Label>Select Disease(s)</Form.Label>
                      {diseaseCategories[selectedCategory].map(
                        (disease, index) => (
                          <Form.Check
                            key={index}
                            type="checkbox"
                            id={`disease-${index}`}
                            label={disease}
                            value={disease}
                            checked={selectedDiseases.includes(disease)}
                            onChange={handleDiseaseChange}
                            custom
                          />
                        )
                      )}
                    </Form.Group>
                  )}

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
