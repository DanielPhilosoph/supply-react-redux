import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default function WorkerForm() {
  return (
    <Form className="workerForm">
      <div>
        <h2>Worker</h2>
      </div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Company
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Company" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Date
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Date" />
        </Col>
      </Form.Group>
    </Form>
  );
}
