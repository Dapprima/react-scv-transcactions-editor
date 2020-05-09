import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function EditModal() {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" custom>
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" custom>
              <option>Refill</option>
              <option>Withdrawal</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Client name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter amount" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
