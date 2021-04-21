import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./DetailsOfGame.module.css";

const DetailsOfGame = () => {
  
  let highscores = useSelector((state) => state.highscores);

  let games = useSelector((state) => state.games);

  const { title } = useParams();

  const game = games.find((game) => game.title === title);

  const highscoresOfGame = highscores.filter((obj) => {
    return obj.game.id === game.id;
  });

  highscoresOfGame.sort((a, b) => b.score - a.score);

  for (let i = 0; i < highscoresOfGame.length; i++) {
    const element = highscoresOfGame[i];
    element.rank = i + 1;
  }

  return (
    <div>
      {/* About Game */}
      <Link to={"/"}>
      <div className={style.logo}><b>Hi<span>g</span>hsc<span>o</span>res</b></div>
      </Link>
      <div className={style.aboutGameContainer}>
        <div className={style.aboutGame}>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <p>
            <strong>Genre:</strong> {game.genre}
          </p>
          <p>
            <strong>Release year:</strong> {game.releaseYear}
          </p>
        </div>
        <div className={style.imgContainer}>
          <img src={game.imageUrl} alt="gameImg" />
        </div>
      </div>
      <div className={style.highScoresOfGame}>
        <h1>All highscores in {game.title} </h1>
        <div className={style.detailsContainer}>
          <div className={style.labels}>
            <p>Rank</p>
            <p>Player</p>
            <p>Date</p>
            <p>Score</p>
          </div>
          {highscoresOfGame.map((highscore) => (
            <div className={style.highscoreContainer} key={highscore.id}>
              <div className={style.rank}>
                <p>{highscore.rank}.</p>
              </div>
              <p className={style.about}>
                <strong>{highscore.player}</strong>, {highscore.date}
              </p>
              <p className={style.score}>
                <strong>{highscore.score}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsOfGame;
