import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewHighscore } from "../../redux/reducer";
import style from "./NewHighScore.module.css";

const NewHighScore = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [game, setGame] = useState({});
  const [player, setPlayer] = useState("");
  const [date, setDate] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const highscore = {
      game,
      player,
      date,
      score,
    };

    dispatch(addNewHighscore(highscore));

    history.push("/");
  };

  const cancelRegisterNewHighscore = (e) => {
    history.push("/");
  };

  return (
    <div className={style.NewHighScore}>
      <h1 className={style.title}>Register highscore</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Game:
          <br />
          <select value={game} onChange={(e) => setGame(e.target.value)}>
            <option className={style.formInput}>Välj spel</option>
            <option value="Tetris">Tetris</option>
            <option value="Pac-Man">Pac-Man</option>
            <option value="Asteroids">Asteroids</option>
          </select>
        </label>
        <label>
          Player:
          <br />
          <input
            className={style.formInput}
            type="text"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </label>
        <label>
          Date:
          <br />
          <input
            className={style.formInput}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Score:
          <br />
          <input
            className={style.formInput}
            type="numbers"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </label>
        <button type="submit" className={style.btnSubmit}>
          Add
        </button>
        <button
          type="button"
          className={style.btnCancel}
          onClick={(e) => cancelRegisterNewHighscore()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewHighScore;
