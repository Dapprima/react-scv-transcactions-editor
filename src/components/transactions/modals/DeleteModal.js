import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideDeleteModal } from "../../../redux/actions/ui";
import { deleteRow } from "../../../redux/actions/file";
function DeleteModal({
  currentRowId,
  deleteModal,
  hideDeleteModal,
  deleteRow,
}) {
  return (
    <Modal show={deleteModal}>
      <Modal.Header>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Did you want delete ?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            deleteRow(currentRowId);
            hideDeleteModal();
          }}
        >
          Delete
        </Button>
        <Button variant="secondary" onClick={() => hideDeleteModal()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.propTypes = {
  currentRowId: PropTypes.string,
  deleteModal: PropTypes.bool,
  hideDeleteModal: PropTypes.func,
  deleteRow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentRowId: state.uiReducer.currentRowId,
  deleteModal: state.uiReducer.deleteModal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideDeleteModal: () => dispatch(hideDeleteModal()),
    deleteRow: (id) => dispatch(deleteRow(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
