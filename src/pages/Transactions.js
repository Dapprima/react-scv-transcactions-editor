import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import FileList from "../components/transactions/files/FileList";
import Status from "../components/transactions/filters/Status";
import Type from "../components/transactions/filters/Type";
import FileData from "../components/transactions/files/FileData";

export default function Transactions() {
  return (
    <Row>
      <Col xs={2} className="border p-0">
        <FileList />
      </Col>
      <Col xs={10}>
        <Row>
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <Status />
              </Col>
              <Col xs={6}>
                <Type />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={6} className="d-flex justify-content-end">
                <Button>Import </Button>
              </Col>
              <Col xs={6}>
                <Button>Export </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <FileData />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
