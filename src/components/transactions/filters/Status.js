import React from "react";
import { SplitButton, Dropdown } from "react-bootstrap";

export default function Status() {
  return (
    <SplitButton title="Status" className="w-100">
      <Dropdown.Item eventKey="1">Pending</Dropdown.Item>
      <Dropdown.Item eventKey="2">Completed</Dropdown.Item>
      <Dropdown.Item eventKey="3">Cancelled</Dropdown.Item>
    </SplitButton>
  );
}
