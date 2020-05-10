import {
  SHOW_EXPORT_MODAL,
  SHOW_IMPORT_MODAL,
  HIDE_EXPORT_MODAL,
  HIDE_IMPORT_MODAL,
} from "../types";

export function showExportModal(data) {
  return {
    type: SHOW_EXPORT_MODAL,
  };
}
export function showImportModal(data) {
  return {
    type: SHOW_IMPORT_MODAL,
  };
}
export function hideExportModal(data) {
  return {
    type: HIDE_EXPORT_MODAL,
  };
}
export function hideImportModal(data) {
  return {
    type: HIDE_IMPORT_MODAL,
  };
}
