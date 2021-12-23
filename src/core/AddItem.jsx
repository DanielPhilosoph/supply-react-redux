import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function AddItem() {
  const dispatch = useDispatch();
  return (
    <Form className="addItemForm">
      <div>
        <h2>Add Item</h2>
      </div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Supply name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Supply name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Full amount
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="10" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Current amount
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="10" />
        </Col>
        <Col sm="10" className="addItemColButton">
          <Button variant="primary">Add item</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
