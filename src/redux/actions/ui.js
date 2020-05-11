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

export function showExportModal() {
  return {
    type: SHOW_EXPORT_MODAL,
  };
}
export function showImportModal() {
  return {
    type: SHOW_IMPORT_MODAL,
  };
}
export function hideExportModal() {
  return {
    type: HIDE_EXPORT_MODAL,
  };
}
export function hideImportModal() {
  return {
    type: HIDE_IMPORT_MODAL,
  };
}

export function showEditModal(data) {
  return {
    type: SHOW_EDIT_MODAL,
    payload: data,
  };
}
export function showDeleteModal(data) {
  return {
    type: SHOW_DELETE_MODAL,
    payload: data,
  };
}
export function hideEditModal() {
  return {
    type: HIDE_EDIT_MODAL,
  };
}
export function hideDeleteModal() {
  return {
    type: HIDE_DELETE_MODAL,
  };
}
