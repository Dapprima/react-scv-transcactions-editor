import { IMPORT_FILE } from "../types";

const initialState = {
  currentData: [],
  fileNames: [],
};

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case IMPORT_FILE:
      let newFileNames = [...state.fileNames, action.payload.fileName];
      return {
        ...state,
        currentData: action.payload.data,
        fileNames: newFileNames,
      };
    default:
      return state;
  }
}
