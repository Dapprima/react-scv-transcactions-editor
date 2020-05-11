import {
  IMPORT_FILE,
  CHANGE_FILE,
  TOGGLE_FILTERS,
  EDIT,
  DELETE,
} from "../types";

const initialState = {
  allData: {},
  defaultData: [],
  currentData: [],
  currentFile: "",
  fileNames: [],
  filters: [],
};

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case IMPORT_FILE:
      let newFileNames = [...state.fileNames, action.payload.fileName];
      let newAllData = { ...state.allData };
      newAllData[action.payload.fileName] = action.payload.data;
      return {
        ...state,
        allData: newAllData,
        currentData: action.payload.data,
        defaultData: action.payload.data,
        fileNames: newFileNames,
        currentFile: action.payload.fileName,
      };
    case CHANGE_FILE:
      return {
        ...state,
        currentFile: action.payload,
        currentData: state.allData[action.payload],
        defaultData: state.allData[action.payload],
      };
    case TOGGLE_FILTERS:
      let newFilters = state.filters.includes(action.payload)
        ? state.filters.filter((filter) => filter !== action.payload)
        : [...state.filters, action.payload];
      let newCurrentData = state.defaultData.filter((data, index) => {
        if (index === 0) return true;
        return newFilters.length === 1
          ? newFilters.includes(data[1]) || newFilters.includes(data[2])
          : newFilters.includes(data[1]) && newFilters.includes(data[2]);
      });
      if (newCurrentData.length === 1) {
        newCurrentData = state.defaultData;
      }
      return {
        ...state,
        filters: newFilters,
        currentData: newCurrentData,
      };
    case EDIT:
      let editData = [...state.currentData];
      editData = editData.map((data) => {
        if (data[0] === action.payload[0]) {
          return action.payload;
        }
        return data;
      });
      return {
        ...state,
        defaultData: editData,
        currentData: editData,
      };
    case DELETE:
      let delData = [...state.currentData];
      delData = delData.filter((data) => data[0] !== action.payload);
      return {
        ...state,
        defaultData: delData,
        currentData: delData,
      };

    default:
      return state;
  }
}
