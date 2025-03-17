// src/components/UserCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="mb-3" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Role: {user.role}</Card.Text>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
