import React from "react";
import { SplitButton, Dropdown } from "react-bootstrap";

export default function Type() {
  return (
    <SplitButton title="Type" className="w-100">
      <Dropdown.Item eventKey="1">Refill</Dropdown.Item>
      <Dropdown.Item eventKey="2">Withdrawal</Dropdown.Item>
    </SplitButton>
  );
}
