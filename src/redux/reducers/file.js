import { EXPORT_FILE, IMPORT_FILE } from "../types";

const initialState = {
  data: [],
};

export default function fileData(state = initialState, action) {
  switch (action.type) {
    case IMPORT_FILE:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
