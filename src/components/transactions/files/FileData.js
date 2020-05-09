import React from "react";
import { Table, Button } from "react-bootstrap";
import LoadFileModal from "../modals/ImportFileModal";
export default function FileData() {
  return (
    <>
      <LoadFileModal />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Status</th>
            <th>Type</th>
            <th>Client Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pending</td>
            <td>Refill</td>
            <td>Victor</td>
            <td>100</td>
            <td className="d-flex justify-content-center">
              <Button className="bg-info mr-1">Edit</Button>
              <Button className="bg-danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
