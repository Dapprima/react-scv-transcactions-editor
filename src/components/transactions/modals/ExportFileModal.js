import React from "react";
import { CSVLink } from "react-csv";

import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideExportModal } from "../../../redux/actions/ui";

function ExportFileModal({ exportModal, hideExportModal, currentData }) {
  return (
    <Modal show={exportModal}>
      <Modal.Header>
        <Modal.Title>Export</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CSVLink filename="new_file.csv" data={currentData}>
          Download file
        </CSVLink>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => hideExportModal()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ExportFileModal.propTypes = {
  exportModal: PropTypes.bool.isRequired,
  hideExportModal: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  exportModal: state.uiReducer.exportModal,
  currentData: state.fileReducer.currentData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideExportModal: () => dispatch(hideExportModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportFileModal);
