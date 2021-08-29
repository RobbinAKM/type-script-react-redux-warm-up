import axios from "axios";
import { Dispatch } from "redux";
import { Actions } from "../action-types";

export const searchRepositories = (item: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: "searching",
      payload: [],
    });

    try {
      var { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
        params: {
          text: item,
        },
      });

      var results = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: "search_success",
        payload: results,
      });
    } catch (error) {
      dispatch({
        type: "search_error",
        payload: "error occured",
      });
    }
  };
};
