// import React, { useState } from "react";
// import { Col, Row, Button, Form } from "@themesberg/react-bootstrap";

// export default () => {
//   // State for form fields
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Handler for form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userData = {
//       name,
//       email,
//       password,
//     };
//     console.log("User registered:", userData);
//     // Here you would typically send the data to a server for processing
//   };

//   return (
//     <>
//       {/* Centering the form */}
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ minHeight: "100vh" }}
//       >
//         <Row className="w-100 justify-content-center">
//           <Col xs={12} sm={10} md={8} lg={6}>
//             <h3 className="mb-4 text-center">User Registration</h3>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formEmail" className="mt-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formPassword" className="mt-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="mt-4 w-100">
//                 Register
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };
