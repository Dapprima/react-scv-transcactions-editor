import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changeFile } from "../../../redux/actions/file";

function FileList({ fileNames, currentFile, changeFile }) {
  return (
    <ListGroup className="border">
      {fileNames.map((fileName, index) => (
        <ListGroup.Item key={index}>
          <Button
            className="w-100"
            active={currentFile === fileName}
            onClick={() => changeFile(fileName)}
          >
            {fileName}
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

FileList.propTypes = {
  fileNames: PropTypes.array.isRequired,
  currentFile: PropTypes.string.isRequired,
  changeFile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  fileNames: state.fileReducer.fileNames,
  currentFile: state.fileReducer.currentFile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeFile: (fileName) => dispatch(changeFile(fileName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FileList);
