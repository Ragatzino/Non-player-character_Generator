export const setRaces = races => {
  return {
    type: "SET_RACE",
    payload: races
  };
};

export const fetchRaces = () => (dispatch, getState) => {
  if (getState().raceReducer.races.length === 0) {
    return fetch("http://localhost:8080/races")
      .then(response => response.json())
      .then(result => {
        dispatch(setRaces(result));
      });
  }
};
