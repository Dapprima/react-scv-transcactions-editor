import {
  IMPORT_FILE,
  CHANGE_FILE,
  TOGGLE_FILTERS,
  EDIT,
  DELETE,
} from "../types";

export function importFile(data) {
  return {
    type: IMPORT_FILE,
    payload: data,
  };
}
export function changeFile(filename) {
  return {
    type: CHANGE_FILE,
    payload: filename,
  };
}

export function toggleFilters(filter) {
  return {
    type: TOGGLE_FILTERS,
    payload: filter,
  };
}

export function editRow(newRow) {
  return {
    type: EDIT,
    payload: newRow,
  };
}
export function deleteRow(id) {
  return {
    type: DELETE,
    payload: id,
  };
}
