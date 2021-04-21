import { ADD_NEW_HIGHSCORE, LOAD_HIGHSCORES } from "./actionsTypes";

const initialState = {
  highscores: [],
  games: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_HIGHSCORES: {
      const highscores = action.payload.highscores;
      const games = action.payload.games;

      const newState = {
        ...state,
        highscores,
        games,
      };

      newState.highscores = highscores;
      newState.games = games;
      return newState;
    }

    case ADD_NEW_HIGHSCORE: {
      const highscore = action.payload.highscore;

      const newState = {
        ...state,
        highscores: [...state.highscores, highscore],
      };

      return newState;
    }

    default:
      return state;
  }
}

export async function fetchHighscores(dispatch, getState) {
  const response = await fetch("http://localhost:8000/api/highscores");
  const highscores = await response.json();

  const resp = await fetch("http://localhost:8000/api/games");
  const games = await resp.json();

  dispatch({ type: LOAD_HIGHSCORES, payload: { highscores, games } });
}

export function addNewHighscore(highscore) {
  return async function addNewHighscoreThunk(dispatch, getState) {
    // skickar POST-request till backend för att skapa nytt highscore
    const response = await fetch("http://localhost:8000/api/highscores", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(highscore),
    });

    const newScore = await response.json();

    dispatch({ type: ADD_NEW_HIGHSCORE, payload: { highscore: newScore } });
  };
}
