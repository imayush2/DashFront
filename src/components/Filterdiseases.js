import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import Select from "react-select";

// Define your options for specialties and diseases
const specialtyOptions = [
  { value: "Cardiologist", label: "Cardiologist" },
  { value: "Neurologist", label: "Neurologist" },
  { value: "Pediatrician", label: "Pediatrician" },
  { value: "Orthopedic Surgeon", label: "Orthopedic Surgeon" },
  { value: "Psychiatrist", label: "Psychiatrist" },
  { value: "Dermatologist", label: "Dermatologist" },
  { value: "Gynecologist", label: "Gynecologist" },
  { value: "Gastroenterologist", label: "Gastroenterologist" },
  { value: "Ophthalmologist", label: "Ophthalmologist" },
  { value: "Urologist", label: "Urologist" },
  { value: "Endocrinologist", label: "Endocrinologist" },
  { value: "Hematologist", label: "Hematologist" },
  { value: "Rheumatologist", label: "Rheumatologist" },
];

const diseaseOptions = [
  { value: "Infectious Disease", label: "Infectious Disease" },
  { value: "Cancer", label: "Cancer" },
  { value: "Diabetes", label: "Diabetes" },
  { value: "Asthma", label: "Asthma" },
  { value: "Hypertension", label: "Hypertension" },
  { value: "Obesity", label: "Obesity" },
  { value: "Arthritis", label: "Arthritis" },
  { value: "Stroke", label: "Stroke" },
  { value: "Depression", label: "Depression" },
  { value: "Epilepsy", label: "Epilepsy" },
  { value: "HIV/AIDS", label: "HIV/AIDS" },
];

const FilterByDiseaseAndSpecialty = ({
  doctorData,
  setFilteredData,
  setCurrentPage,
}) => {
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const handleSpecialtyChange = (selected) => {
    setSelectedSpecialties(selected);
  };

  const handleDiseaseChange = (selected) => {
    setSelectedDiseases(selected);
  };

  const handleApplyFilter = () => {
    let filteredDoctors = doctorData;

    // Filter by selected specialties
    if (selectedSpecialties.length > 0) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        selectedSpecialties.some((specialty) =>
          doctor.specialty.toLowerCase().includes(specialty.value.toLowerCase())
        )
      );
    }

    // Filter by selected diseases
    if (selectedDiseases.length > 0) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        selectedDiseases.some((disease) =>
          doctor.diseases.some((d) =>
            d.toLowerCase().includes(disease.value.toLowerCase())
          )
        )
      );
    }

    setFilteredData(filteredDoctors);
    setCurrentPage(1); // Reset to page 1 when filtering
  };

  return (
    <Form.Group as={Row} controlId="filter">
      {/* First Filter: Diseases */}
      <Col sm="12" md="5" className="mb-3">
        <Select
          isMulti
          id="diseaseFilter"
          options={diseaseOptions}
          value={selectedDiseases}
          onChange={handleDiseaseChange}
          getOptionValue={(e) => e.value}
          placeholder="diseases..."
          className="react-select-container w-100" // Full width for the select box
          classNamePrefix="react-select"
        />
      </Col>

      {/* Second Filter: Specialties */}
      <Col sm="12" md="5" className="mb-3">
        <Select
          isMulti
          id="specialtyFilter"
          options={specialtyOptions}
          value={selectedSpecialties}
          onChange={handleSpecialtyChange}
          getOptionValue={(e) => e.value}
          placeholder="specialties..."
          className="react-select-container w-100" // Full width for the select box
          classNamePrefix="react-select"
        />
      </Col>

      {/* Filter Button */}
      <Col sm="12" md="2" className="d-flex align-items-center">
        <Button variant="primary" onClick={handleApplyFilter}>
          Filter
        </Button>
      </Col>
    </Form.Group>
  );
};

export default FilterByDiseaseAndSpecialty;
