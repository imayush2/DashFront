import React, { useState } from "react";
import DoctorProfile from "../components/DoctorProfile.js";
import FilterDoctors from "../components/Filter.js";
import FilterByDisease from "../components/Filterdiseases.js";
import PaginationComponent from "../components/Pagination.js";
// import FilterByDiseaseAndSpecialty from "../components/Filterdiseases.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheck,
//   faCog,
//   faHome,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   Col,
//   Row,
//   Form,
//   Button,
//   ButtonGroup,
//   Breadcrumb,
//   InputGroup,
//   Dropdown,
// } from "@themesberg/react-bootstrap";

// import { TransactionsTable } from "../components/Tables";
const doctorData = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    score: "10",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Heart Disease", "Hypertension", "Arrhythmia"], // Added diseases
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Neurologist",
    score: "9",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Parkinson's ", "Alzheimer's", "Epilepsy"], // Added diseases
  },
  {
    name: "Dr. Emily White",
    specialty: "Pediatrician",
    score: "8",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Asthma", "Chickenpox", "Cough"], // Added diseases
  },
  {
    name: "Dr. Michael Green",
    specialty: "Orthopedic",
    score: "9.5",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Arthritis", "Osteoporosis", "Fractures"], // Added diseases
  },
  {
    name: "Dr. Olivia Brown",
    specialty: "Psychiatrist",
    score: "7.5",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Depression", "Anxiety", "Bipolar Disorder"], // Added diseases
  },
  {
    name: "Dr. Samuel Clark",
    specialty: "Dermatologist",
    score: "8.8",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Eczema", "Acne", "Psoriasis"], // Added diseases
  },
  {
    name: "Dr. Mia Davis",
    specialty: "Gynecologist",
    score: "9",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Endometriosis", "PCOS", "Pregnancy Issues"], // Added diseases
  },
  {
    name: "Dr. Robert Wilson",
    specialty: "Gastroenterologist",
    score: "8.2",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Irritable", "Crohn's Disease", "Ulcerative"], // Added diseases
  },
  {
    name: "Dr. Ava Harris",
    specialty: "Ophthalmologist",
    score: "8.7",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Cataracts", "Glaucoma", "Macular"], // Added diseases
  },
  {
    name: "Dr. Lucas Martinez",
    specialty: "Urologist",
    score: "9.3",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Urinary Tract ", "Kidney Stones", "Prostate Issues"], // Added diseases
  },
  {
    name: "Dr. Sophia Lee",
    specialty: "Endocrinologist",
    score: "9.4",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Diabetes", "Thyroid Disorders", "Adrenal Disorders"], // Added diseases
  },
  {
    name: "Dr. Ethan Allen",
    specialty: "Hematologist",
    score: "8.5",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Anemia", "Leukemia", "Hemophilia"], // Added diseases
  },
  {
    name: "Dr. Isabella Scott",
    specialty: "Rheumatologist",
    score: "9.2",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Rheumatoid", "Lupus", "Osteoarthritis"], // Added diseases
  },
  {
    name: "Dr. William Robinson",
    specialty: "Infectious",
    score: "7.9",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Malaria", "HIV/AIDS", "Tuberculosis"], // Added diseases
  },
  {
    name: "Dr. Charlotte Taylor",
    specialty: "Plastic",
    score: "9.6",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Burns", "Scars", "Cosmetic Surgery"], // Added diseases
  },
  {
    name: "Dr. Benjamin Lee",
    specialty: "Anesthesiologist",
    score: "8.9",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Anesthesia", "Pain Management"], // Added diseases
  },
  {
    name: "Dr. Mia Johnson",
    specialty: "Family Medicine",
    score: "9.1",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    diseases: ["Flu", "Cold", "Diabetes"], // Added diseases
  },
];

export default function App() {
  const [filteredData, setFilteredData] = useState(doctorData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Set number of doctors per page

  // Get the current page data
  const indexOfLastDoctor = currentPage * itemsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - itemsPerPage;
  const currentDoctors = filteredData.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Container to hold both filters on the same line with a smaller gap */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        {/* Search filter with small gap */}
        <FilterDoctors
          doctorData={doctorData}
          setFilteredData={setFilteredData}
          setCurrentPage={setCurrentPage} // Reset to page 1 when filtering
        />

        {/* Disease filter */}
        <FilterByDisease
          doctorData={doctorData}
          setFilteredData={setFilteredData}
          setCurrentPage={setCurrentPage}
        />

        <div>
          {/* Export Button */}
          <button className="btn btn-info">Export</button>
        </div>
      </div>

      <DoctorProfile doctorData={currentDoctors} />

      {/* Use PaginationComponent */}
      <PaginationComponent
        currentPage={currentPage}
        totalItems={filteredData.length} // Total items after filtering
        itemsPerPage={itemsPerPage} // Items per page
        handlePageChange={handlePageChange} // Page change handler
      />
    </div>
  );
}
