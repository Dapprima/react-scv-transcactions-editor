import { EXPORT_FILE, IMPORT_FILE } from "../types";

export function importFile(data) {
  return {
    type: IMPORT_FILE,
    data: data,
  };
}
