import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function FileList({ fileNames }) {
  return (
    <ListGroup>
      {fileNames
        ? fileNames.map((fileName, index) => (
            <ListGroup.Item key={index}>
              <Button className="w-100">{fileName}</Button>
            </ListGroup.Item>
          ))
        : ""}
    </ListGroup>
  );
}

FileList.propTypes = {
  fileNames: PropTypes.array,
};

const mapStateToProps = (state) => ({
  fileNames: state.fileReducer.fileNames,
});

export default connect(mapStateToProps, null)(FileList);
