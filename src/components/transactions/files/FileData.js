import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Pagination from "../../layouts/Pagination";

import { showEditModal } from "../../../redux/actions/ui";
import { showDeleteModal } from "../../../redux/actions/ui";

function FileData({ transactions, showEditModal, showDeleteModal }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  // Cut the csv file header
  transactions = transactions.slice(1);

  // Get current data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = transactions.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
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
          {currentData.map((transact, index) => (
            <tr key={index}>
              <td>{transact[0]}</td>
              <td>{transact[1]}</td>
              <td>{transact[2]}</td>
              <td>{transact[3]}</td>
              <td>{transact[4]}</td>
              <td className="d-flex justify-content-center">
                <Button
                  className="bg-info mr-1"
                  onClick={() => {
                    showEditModal(transact);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="bg-danger"
                  onClick={() => {
                    showDeleteModal(transact[0]);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        dataPerPage={dataPerPage}
        totalData={transactions.length}
        paginate={paginate}
        active={currentPage}
      />
    </>
  );
}

FileData.propTypes = {
  transactions: PropTypes.array,
  showEditModal: PropTypes.func,
  showDeleteModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  transactions: state.fileReducer.currentData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    showEditModal: (data) => dispatch(showEditModal(data)),
    showDeleteModal: (id) => dispatch(showDeleteModal(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileData);
