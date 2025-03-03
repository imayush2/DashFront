// import React, { useState } from "react";
// import { Button, Col, Row, Form } from "react-bootstrap";
// import Select from "react-select";

// // Define your options for specialties and diseases
// const specialtyOptions = [
//   { value: "Cardiologist", label: "Cardiologist" },
//   { value: "Neurologist", label: "Neurologist" },
//   { value: "Pediatrician", label: "Pediatrician" },
//   { value: "Orthopedic Surgeon", label: "Orthopedic Surgeon" },
//   { value: "Psychiatrist", label: "Psychiatrist" },
//   { value: "Dermatologist", label: "Dermatologist" },
//   { value: "Gynecologist", label: "Gynecologist" },
//   { value: "Gastroenterologist", label: "Gastroenterologist" },
//   { value: "Ophthalmologist", label: "Ophthalmologist" },
//   { value: "Urologist", label: "Urologist" },
//   { value: "Endocrinologist", label: "Endocrinologist" },
//   { value: "Hematologist", label: "Hematologist" },
//   { value: "Rheumatologist", label: "Rheumatologist" },
// ];

// const diseaseOptions = [
//   { value: "Infectious Disease", label: "Infectious Disease" },
//   { value: "Cancer", label: "Cancer" },
//   { value: "Diabetes", label: "Diabetes" },
//   { value: "Asthma", label: "Asthma" },
//   { value: "Hypertension", label: "Hypertension" },
//   { value: "Obesity", label: "Obesity" },
//   { value: "Arthritis", label: "Arthritis" },
//   { value: "Stroke", label: "Stroke" },
//   { value: "Depression", label: "Depression" },
//   { value: "Epilepsy", label: "Epilepsy" },
//   { value: "HIV/AIDS", label: "HIV/AIDS" },
// ];

// const FilterByDiseaseAndSpecialty = ({
//   doctorData,
//   setFilteredData,
//   setCurrentPage,
// }) => {
//   const [selectedSpecialties, setSelectedSpecialties] = useState([]);
//   const [selectedDiseases, setSelectedDiseases] = useState([]);

//   const handleSpecialtyChange = (selected) => {
//     setSelectedSpecialties(selected);
//   };

//   const handleDiseaseChange = (selected) => {
//     setSelectedDiseases(selected);
//   };

//   const handleApplyFilter = () => {
//     let filteredDoctors = doctorData;

//     // Filter by selected specialties
//     if (selectedSpecialties.length > 0) {
//       filteredDoctors = filteredDoctors.filter((doctor) =>
//         selectedSpecialties.some((specialty) =>
//           doctor.specialty.toLowerCase().includes(specialty.value.toLowerCase())
//         )
//       );
//     }

//     // Filter by selected diseases
//     if (selectedDiseases.length > 0) {
//       filteredDoctors = filteredDoctors.filter((doctor) =>
//         selectedDiseases.some((disease) =>
//           doctor.diseases.some((d) =>
//             d.toLowerCase().includes(disease.value.toLowerCase())
//           )
//         )
//       );
//     }

//     setFilteredData(filteredDoctors);
//     setCurrentPage(1); // Reset to page 1 when filtering
//   };

//   return (
//     <Form.Group as={Row} controlId="filter">
//       {/* First Filter: Diseases */}
//       <Col sm="12" md="5" className="mb-3">
//         <Select
//           isMulti
//           id="diseaseFilter"
//           options={diseaseOptions}
//           value={selectedDiseases}
//           onChange={handleDiseaseChange}
//           getOptionValue={(e) => e.value}
//           placeholder="Select Diseases..."
//           className="react-select-container w-100" // Full width for the select box
//           classNamePrefix="react-select"
//           // Custom option rendering with checkboxes
//           getOptionLabel={(e) => (
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <input
//                 type="checkbox"
//                 checked={selectedDiseases.some(
//                   (item) => item.value === e.value
//                 )}
//                 readOnly
//                 style={{ marginRight: "10px" }}
//               />
//               {e.label}
//             </div>
//           )}
//         />
//       </Col>

//       {/* Second Filter: Specialties */}
//       <Col sm="12" md="5" className="mb-3">
//         <Select
//           isMulti
//           id="specialtyFilter"
//           options={specialtyOptions}
//           value={selectedSpecialties}
//           onChange={handleSpecialtyChange}
//           getOptionValue={(e) => e.value}
//           placeholder="Select Specialties..."
//           className="react-select-container w-100" // Full width for the select box
//           classNamePrefix="react-select"
//           // Custom option rendering with checkboxes
//           getOptionLabel={(e) => (
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <input
//                 type="checkbox"
//                 checked={selectedSpecialties.some(
//                   (item) => item.value === e.value
//                 )}
//                 readOnly
//                 style={{ marginRight: "10px" }}
//               />
//               {e.label}
//             </div>
//           )}
//         />
//       </Col>

//       {/* Filter Button */}
//       <Col sm="12" md="2" className="d-flex align-items-center">
//         <Button variant="primary" onClick={handleApplyFilter}>
//           Filter
//         </Button>
//       </Col>
//     </Form.Group>
//   );
// };

// export default FilterByDiseaseAndSpecialty;

import React, { useState } from "react";
import {
  Button,
  Col,
  Row,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

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

  // Update selected specialties
  const handleSpecialtyChange = (specialty) => {
    const updatedSpecialties = selectedSpecialties.includes(specialty)
      ? selectedSpecialties.filter((item) => item !== specialty)
      : [...selectedSpecialties, specialty];
    setSelectedSpecialties(updatedSpecialties);
  };

  // Update selected diseases
  const handleDiseaseChange = (disease) => {
    const updatedDiseases = selectedDiseases.includes(disease)
      ? selectedDiseases.filter((item) => item !== disease)
      : [...selectedDiseases, disease];
    setSelectedDiseases(updatedDiseases);
  };

  const handleApplyFilter = () => {
    let filteredDoctors = doctorData;

    // Filter by selected specialties
    if (selectedSpecialties.length > 0) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        selectedSpecialties.some((specialty) =>
          doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
        )
      );
    }

    // Filter by selected diseases
    if (selectedDiseases.length > 0) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        selectedDiseases.some((disease) =>
          doctor.diseases.some((d) =>
            d.toLowerCase().includes(disease.toLowerCase())
          )
        )
      );
    }

    setFilteredData(filteredDoctors);
    setCurrentPage(1); // Reset to page 1 when filtering
  };

  const renderSelectedItems = (selectedItems, label) => {
    if (selectedItems.length > 0) {
      return `${selectedItems.length} selected`; // Show count of selected items
    }
    return `Select ${label}...`; // Placeholder text
  };

  return (
    <Form.Group as={Row} controlId="filter">
      {/* First Filter: Diseases */}
      <Col sm="12" md="5" className="mb-3">
        <DropdownButton
          variant="light"
          id="diseaseFilter"
          title={renderSelectedItems(selectedDiseases, "Diseases")} // Display the count of selected diseases or placeholder
          className="w-100 custom-dropdown"
          drop="down"
        >
          {diseaseOptions.map((disease) => (
            <Dropdown.Item
              key={disease.value}
              onClick={() => handleDiseaseChange(disease.value)}
              active={selectedDiseases.includes(disease.value)}
              className={`custom-dropdown-item ${
                selectedDiseases.includes(disease.value) ? "selected" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedDiseases.includes(disease.value)}
                readOnly
                style={{ marginRight: "10px" }}
              />
              {disease.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Col>

      {/* Second Filter: Specialties */}
      <Col sm="12" md="5" className="mb-3">
        <DropdownButton
          variant="light"
          id="specialtyFilter"
          title={renderSelectedItems(selectedSpecialties, "Specialties")} // Display the count of selected specialties or placeholder
          className="w-100 custom-dropdown"
          drop="down"
        >
          {specialtyOptions.map((specialty) => (
            <Dropdown.Item
              key={specialty.value}
              onClick={() => handleSpecialtyChange(specialty.value)}
              active={selectedSpecialties.includes(specialty.value)}
              className={`custom-dropdown-item ${
                selectedSpecialties.includes(specialty.value) ? "selected" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedSpecialties.includes(specialty.value)}
                readOnly
                style={{ marginRight: "10px" }}
              />
              {specialty.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
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
