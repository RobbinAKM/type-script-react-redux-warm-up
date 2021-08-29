import { Actions } from "../action-types";

interface StateInterface {
  data: string | string[];
  error: string | string[] | null;
  loading: boolean;
}

var initialState = {
  data: [],
  error: null,
  loading: false,
};

const reducer = (
  state: StateInterface = initialState,
  action: Actions
): StateInterface => {
  switch (action.type) {
    case "searching":
      return { loading: true, error: null, data: [] };
    case "search_success":
      return { loading: false, error: null, data: action.payload };
    case "search_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
