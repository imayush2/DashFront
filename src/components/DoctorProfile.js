import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Card, Container } from "react-bootstrap"; // Importing necessary components from react-bootstrap
import { FaEllipsisH } from "react-icons/fa"; // Import FontAwesome Horizontal Ellipsis icon

const DoctorProfile = ({ doctorData }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleViewMoreClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              <Card style={{ minHeight: "500px" }}>
                {" "}
                {/* Increased height of the card */}
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

      {/* Optional: Modal or Component to show doctor details */}
      {/* {selectedDoctor && (
        <div className="doctor-details mt-4">
          <Card>
            <Card.Header>
              <h5>Doctor Details</h5>
            </Card.Header>
            <Card.Body>
              <h6>Biography:</h6>
              <p>{selectedDoctor.biography}</p>
              <h6>Experience:</h6>
              <p>{selectedDoctor.experience} years</p>
              <h6>Contact:</h6>
              <p>{selectedDoctor.contact}</p>
            </Card.Body>
          </Card>
        </div>
      )} */}
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
    })
  ).isRequired,
};

export default DoctorProfile;
