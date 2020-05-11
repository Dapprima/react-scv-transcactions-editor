import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FileList from "../components/transactions/files/FileList";
import Status from "../components/transactions/filters/Status";
import Type from "../components/transactions/filters/Type";
import FileData from "../components/transactions/files/FileData";
import ExportFileModal from "../components/transactions/modals/ExportFileModal";
import ImportFileModal from "../components/transactions/modals/ImportFileModal";
import EditModal from "../components/transactions/modals/EditModal";
import DeleteModal from "../components/transactions/modals/DeleteModal";

import { showImportModal } from "../redux/actions/ui";
import { showExportModal } from "../redux/actions/ui";

function Transactions({ showImportModal, showExportModal }) {
  return (
    <Row>
      <ImportFileModal />
      <ExportFileModal />
      <EditModal />
      <DeleteModal />
      <Col xs={2} className="p-0">
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
                <Button onClick={() => showImportModal()}>Import </Button>
              </Col>
              <Col xs={6}>
                <Button onClick={() => showExportModal()}>Export </Button>
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

Transactions.propTypes = {
  showImportModal: PropTypes.func,
  showExportModal: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    showImportModal: () => dispatch(showImportModal()),
    showExportModal: () => dispatch(showExportModal()),
  };
};

export default connect(null, mapDispatchToProps)(Transactions);
