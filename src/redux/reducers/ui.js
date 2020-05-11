import {
  SHOW_EXPORT_MODAL,
  SHOW_IMPORT_MODAL,
  HIDE_EXPORT_MODAL,
  HIDE_IMPORT_MODAL,
  SHOW_EDIT_MODAL,
  SHOW_DELETE_MODAL,
  HIDE_EDIT_MODAL,
  HIDE_DELETE_MODAL,
} from "../types";

const initialState = {
  exportModal: false,
  importModal: false,
  editModal: false,
  deleteModal: false,
  currentRow: [],
  currentRowId: "",
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

    case SHOW_EDIT_MODAL:
      return {
        ...state,
        editModal: true,
        currentRow: action.payload,
      };
    case HIDE_EDIT_MODAL:
      return {
        ...state,
        editModal: false,
      };
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        deleteModal: true,
        currentRowId: action.payload,
      };
    case HIDE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: false,
      };
    default:
      return state;
  }
}
