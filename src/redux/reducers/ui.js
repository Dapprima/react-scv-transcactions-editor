import {
  SHOW_EXPORT_MODAL,
  SHOW_IMPORT_MODAL,
  HIDE_EXPORT_MODAL,
  HIDE_IMPORT_MODAL,
} from "../types";

const initialState = {
  exportModal: false,
  importModal: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_EXPORT_MODAL:
      return {
        ...state,
        exportModal: true,
      };
    case HIDE_EXPORT_MODAL:
      return {
        ...state,
        exportModal: false,
      };
    case SHOW_IMPORT_MODAL:
      return {
        ...state,
        importModal: true,
      };
    case HIDE_IMPORT_MODAL:
      return {
        ...state,
        importModal: false,
      };
    default:
      return state;
  }
}
