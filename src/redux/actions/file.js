import { IMPORT_FILE } from "../types";

export function importFile(data) {
  return {
    type: IMPORT_FILE,
    payload: data,
  };
}
