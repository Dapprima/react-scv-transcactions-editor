import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

const Paginations = ({ dataPerPage, totalData, paginate, active }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            size="sm"
            onClick={() => paginate(number)}
            active={number === active}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

Paginations.propTypes = {
  dataPerPage: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default Paginations;
