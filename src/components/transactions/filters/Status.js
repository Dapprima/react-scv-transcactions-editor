import React from "react";
import { SplitButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleFilters } from "../../../redux/actions/file";

function Status({ filters, toggleFilters }) {
  return (
    <SplitButton title="Status" className="w-100">
      <Dropdown.Item
        eventKey="1"
        active={filters.includes("Pending")}
        onClick={() => toggleFilters("Pending")}
      >
        Pending
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="2"
        active={filters.includes("Completed")}
        onClick={() => toggleFilters("Completed")}
      >
        Completed
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="3"
        active={filters.includes("Cancelled")}
        onClick={() => toggleFilters("Cancelled")}
      >
        Cancelled
      </Dropdown.Item>
    </SplitButton>
  );
}

Status.propTypes = {
  filters: PropTypes.array.isRequired,
  toggleFilters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.fileReducer.filters,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilters: (status) => dispatch(toggleFilters(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);
