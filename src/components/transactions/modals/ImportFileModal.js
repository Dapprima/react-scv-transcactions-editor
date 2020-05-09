import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CSVReader from "react-csv-reader";

export default function ImportFileModal() {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Import</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CSVReader
          onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
