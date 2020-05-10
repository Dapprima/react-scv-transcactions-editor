import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Pagination from "../../layouts/Pagination";

function FileData({ transactions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

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
                <Button className="bg-info mr-1">Edit</Button>
                <Button className="bg-danger">Delete</Button>
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
};

const mapStateToProps = (state) => ({
  transactions: state.fileReducer.currentData,
});

export default connect(mapStateToProps, null)(FileData);
