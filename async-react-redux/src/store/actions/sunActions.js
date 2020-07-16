import axios from "axios";
import * as ACT from "../actions";

export const fetchSunData = () => {
  return (dispatch) => {
    dispatch({ type: ACT.FETCH_SUN_START });
    axios
      .get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`)
      .then((res) =>
        // res.data.results
        dispatch({
          type: ACT.FETCH_SUN_SUCCESS,
          payload: res.data.results,
        })
      )
      .catch((err) =>
        console.log(err.response.data.status, err.response.status)
      );
  };
};
