import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Card, Container, Modal } from "react-bootstrap"; // Added Modal import
import { FaEllipsisH } from "react-icons/fa"; // Import FontAwesome Horizontal Ellipsis icon

const DoctorProfile = ({ doctorData }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleViewMoreClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true); // Show the modal when doctor is selected
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setSelectedDoctor(null); // Reset selected doctor
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              <Card style={{ minHeight: "500px" }}>
                <Card.Header>
                  <h5>Doctors List</h5>
                </Card.Header>
                <Card.Body>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Profile Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Specialty</th>
                        <th scope="col">Score</th>
                        <th scope="col">View more</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doctorData.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No doctors found.
                          </td>
                        </tr>
                      ) : (
                        doctorData.map((doctor, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "50%",
                                }}
                              />
                            </td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>{doctor.score}</td>
                            <td>
                              <Button
                                variant="link"
                                onClick={() => handleViewMoreClick(doctor)}
                                style={{
                                  fontSize: "24px",
                                  padding: "0",
                                  border: "none",
                                  background: "transparent",
                                }}
                              >
                                <FaEllipsisH />
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Modal for displaying doctor details */}
      {selectedDoctor && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Doctor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Specialty:</h6>
            <p>{selectedDoctor.specialty}</p>
            <h6>Score:</h6>
            <p>{selectedDoctor.score}</p>
            <h6>Diseases:</h6>
            <ul>
              {selectedDoctor.diseases &&
                selectedDoctor.diseases.map((disease, idx) => (
                  <li key={idx}>{disease}</li>
                ))}
            </ul>
            <h6>Biography:</h6>
            <p>{selectedDoctor.biography || "No biography available"}</p>
            <h6>Experience:</h6>
            <p>{selectedDoctor.experience} years</p>
            <h6>Contact:</h6>
            <p>{selectedDoctor.contact || "Not available"}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

DoctorProfile.propTypes = {
  doctorData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      biography: PropTypes.string,
      experience: PropTypes.number,
      contact: PropTypes.string,
      diseases: PropTypes.arrayOf(PropTypes.string), // List of diseases
    })
  ).isRequired,
};

export default DoctorProfile;
