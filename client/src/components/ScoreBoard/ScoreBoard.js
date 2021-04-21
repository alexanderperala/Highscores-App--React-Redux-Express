import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./ScoreBoard.module.css";

const ScoreBoard = () => {
  
  let highscores = useSelector((state) => state.highscores);

  highscores.sort((a, b) => b.score - a.score);

  let asteroids = highscores.filter((x) => x.game.title === "Asteroids");
  let pacman = highscores.filter((x) => x.game.title === "Pac-Man");
  let tetris = highscores.filter((x) => x.game.title === "Tetris");

  
  return (
    <div className={style.highScoreBoard}>
      {asteroids.slice(0, 1).map((highscore) => (
        <div className={style.highScoreItem} key={highscore.id}>
          <div className={style.highScoreInfo}>
            <Link to={`/Games/${highscore.game.title}`}>
              <h3 className={style.textTitel}>{highscore.game.title}</h3>
            </Link>
            <h5 className={style.text}>
              {highscore.player + ", "} {highscore.date}
            </h5>
          </div>

          <div className={style.score}>
            <h2 className={style.text}>{highscore.score}</h2>
          </div>
        </div>
      ))}
      {pacman.slice(0, 1).map((highscore) => (
        <div className={style.highScoreItem} key={highscore.id}>
          <div className={style.highScoreInfo}>
            <Link to={`/Games/${highscore.game.title}`}>
              <h3 className={style.textTitel}>{highscore.game.title}</h3>
            </Link>
            <h5 className={style.text}>
              {highscore.player + ", "} {highscore.date}
            </h5>
          </div>
          <div className={style.score}>
            <h2 className={style.text}>{highscore.score}</h2>
          </div>
        </div>
      ))}
      {tetris.slice(0, 1).map((highscore) => (
        <div className={style.highScoreItem} key={highscore.id}>
          <div className={style.highScoreInfo}>
            <Link to={`/Games/${highscore.game.title}`}>
              <h3 className={style.textTitel}>{highscore.game.title}</h3>
            </Link>
            <h5 className={style.text}>
              {highscore.player + ", "} {highscore.date}
            </h5>
          </div>
          <div className={style.score}>
            <h2 className={style.text}>{highscore.score}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;