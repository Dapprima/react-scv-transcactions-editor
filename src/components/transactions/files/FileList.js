import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export default function FileList() {
  return (
    <ListGroup>
      <ListGroup.Item className="-1">
        <Button className="w-100">Transactions</Button>
      </ListGroup.Item>
      <ListGroup.Item className=" mb-1">
        <Button className="bg-secondary w-100">New transactions</Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
