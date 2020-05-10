import React from "react";
import { SplitButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleFilters } from "../../../redux/actions/file";

function Type({ filters, toggleFilters }) {
  return (
    <SplitButton title="Type" className="w-100">
      <Dropdown.Item
        eventKey="1"
        active={filters.includes("Refill")}
        onClick={() => toggleFilters("Refill")}
      >
        Refill
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="2"
        active={filters.includes("Withdrawal")}
        onClick={() => toggleFilters("Withdrawal")}
      >
        Withdrawal
      </Dropdown.Item>
    </SplitButton>
  );
}

Type.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Type);
