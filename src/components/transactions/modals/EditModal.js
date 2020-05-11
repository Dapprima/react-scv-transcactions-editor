import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideEditModal } from "../../../redux/actions/ui";
import { editRow } from "../../../redux/actions/file";

function EditModal({ currentRow, editModal, hideEditModal, editRow }) {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <Modal show={editModal}>
      <Modal.Header>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            editRow([
              currentRow[0],
              status || currentRow[1],
              type || currentRow[2],
              name || currentRow[3],
              amount || currentRow[4],
            ]);
            hideEditModal();
            setStatus("");
            setType("");
            setName("");
            setAmount("");
          }}
        >
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              custom
              value={status || currentRow[1]}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              custom
              value={type || currentRow[2]}
              onChange={(event) => setType(event.target.value)}
            >
              <option>Refill</option>
              <option>Withdrawal</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Client name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name || currentRow[3]}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={amount || currentRow[4]}
              onChange={(event) => setAmount(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            hideEditModal();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

EditModal.propTypes = {
  currentRow: PropTypes.array,
  editModal: PropTypes.bool,
  hideEditModal: PropTypes.func,
  editRow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentRow: state.uiReducer.currentRow,
  editModal: state.uiReducer.editModal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideEditModal: () => dispatch(hideEditModal()),
    editRow: (row) => dispatch(editRow(row)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
