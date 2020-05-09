import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function DeleteModal() {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Did you want delete ?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
