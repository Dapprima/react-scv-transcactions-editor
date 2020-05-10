import React from "react";
import { Modal, Button } from "react-bootstrap";
import CSVReader from "react-csv-reader";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { importFile } from "../../../redux/actions/file";
import { hideImportModal } from "../../../redux/actions/ui";

function ImportFileModal({ importFileData, importModal, hideImportModal }) {
  return (
    <Modal show={importModal}>
      <Modal.Header>
        <Modal.Title>Import</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CSVReader
          onFileLoaded={(data, fileInfo) =>
            importFileData({ data, fileName: fileInfo.name })
          }
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => hideImportModal()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ImportFileModal.propTypes = {
  importFileData: PropTypes.func,
  importModal: PropTypes.bool,
  hideImportModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  importModal: state.uiReducer.importModal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    importFileData: (data) => dispatch(importFile(data)),
    hideImportModal: () => dispatch(hideImportModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ImportFileModal);
