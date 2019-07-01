import getApiUrl from "../../utils/webServiceUtils";

export const setRaces = races => {
  return {
    type: "SET_RACE",
    payload: races
  };
};

export const fetchRaces = () => async (dispatch, getState) => {
  if (getState().raceReducer.races.length === 0) {
    return fetch(`${await getApiUrl()}/races`)
      .then(response => response.json())
      .then(result => {
        dispatch(
          setRaces(
            result.map(race => {
              return { ...race, nom: `${race.name}` };
            })
          )
        );
      });
  }
};
