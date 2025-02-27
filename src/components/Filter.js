import React, { useState } from "react";
import { Form, InputGroup } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function FilterDoctors({
  doctorData,
  setFilteredData,
  setCurrentPage,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setCurrentPage(1); // Reset to page 1 when searching
    filterDoctors(term);
  };

  const filterDoctors = (term) => {
    const filtered = doctorData.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(term.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(term.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <Form className="navbar-search">
        <Form.Group id="topbarSearch">
          <InputGroup className="input-group-merge search-bar">
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
