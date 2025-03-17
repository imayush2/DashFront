// src/components/UserList.js
import React, { useState } from "react";
import { Button, Modal, Form, Container } from "react-bootstrap"; // Importing necessary components
import BootstrapTable from "react-bootstrap-table-next"; // Importing react-bootstrap-table-next for data table
import cellEditFactory from "react-bootstrap-table2-editor"; // Import for editable cells (optional, remove if not needed)
import paginationFactory from "react-bootstrap-table2-paginator"; // Pagination for the table
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"; // Import necessary CSS

const UserList = () => {
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [newUser, setNewUser] = useState({
    userId: "",
    name: "",
    email: "",
    role: "",
    date: "",
  });
  const [users, setUsers] = useState([]); // Store list of users

  // Handle form changes to update user input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  // Handle adding user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (
      newUser.name &&
      newUser.email &&
      newUser.role &&
      newUser.userId &&
      newUser.date
    ) {
      setUsers([...users, newUser]);
      setNewUser({ userId: "", name: "", email: "", role: "", date: "" }); // Reset user input after adding
      setShowModal(false); // Close modal after adding user
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Open modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Columns for the table
  const columns = [
    {
      text: "User ID",
      formatter: (cellContent, row) => <span>{row.userId}</span>,
      editorRenderer: (
        editorProps,
        value,
        row,
        column,
        rowIndex,
        columnIndex,
        done
      ) => (
        <input
          type="text"
          value={value}
          onChange={(e) => done(e.target.value)}
        />
      ),
    },
    {
      text: "Name",
      formatter: (cellContent, row) => <span>{row.name}</span>,
      editorRenderer: (
        editorProps,
        value,
        row,
        column,
        rowIndex,
        columnIndex,
        done
      ) => (
        <input
          type="text"
          value={value}
          onChange={(e) => done(e.target.value)}
        />
      ),
    },
    {
      text: "Email",
      formatter: (cellContent, row) => <span>{row.email}</span>,
      editorRenderer: (
        editorProps,
        value,
        row,
        column,
        rowIndex,
        columnIndex,
        done
      ) => (
        <input
          type="text"
          value={value}
          onChange={(e) => done(e.target.value)}
        />
      ),
    },
    {
      text: "Role",
      formatter: (cellContent, row) => <span>{row.role}</span>,
      editorRenderer: (
        editorProps,
        value,
        row,
        column,
        rowIndex,
        columnIndex,
        done
      ) => (
        <input
          type="text"
          value={value}
          onChange={(e) => done(e.target.value)}
        />
      ),
    },
    {
      text: "Date",
      formatter: (cellContent, row) => <span>{row.date}</span>,
      editorRenderer: (
        editorProps,
        value,
        row,
        column,
        rowIndex,
        columnIndex,
        done
      ) => (
        <input
          type="date"
          value={value}
          onChange={(e) => done(e.target.value)}
        />
      ),
    },
  ];

  const paginationOptions = {
    sizePerPage: 5,
    hideSizePerPage: true,
    nextPageText: "Next",
    prePageText: "Previous",
    firstPageText: "First",
    lastPageText: "Last",
  };

  return (
    <Container fluid className="mt-5">
      {/* Move the button to the right side */}
      <div className="d-flex justify-content-end mb-4">
        <Button
          variant="primary"
          onClick={handleShowModal}
          style={styles.customButton}
        >
          Add User
        </Button>
      </div>

      {/* React Bootstrap Table with custom styling */}
      <BootstrapTable
        keyField="userId" // Set a unique key for each row
        data={users}
        columns={columns}
        // pagination={paginationFactory(paginationOptions)}
        cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        classes="custom-table" // Apply custom table styles
        style={styles.customTable} // Apply custom table border style
      />

      {/* Modal for adding user */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3" controlId="userId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User ID"
                name="userId"
                value={newUser.userId}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                name="date"
                value={newUser.date}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={styles.customButton}>
              Add User
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

// Inline styles for custom boundaries
const styles = {
  customTable: {
    border: "4px solid #333", // Darker and bolder border for the table
    borderRadius: "5px",
    borderCollapse: "collapse", // Ensures borders are continuous
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional shadow for more emphasis
  },
  customButton: {
    border: "2px solid #333", // Darker border for the button
  },
};

export default UserList;
