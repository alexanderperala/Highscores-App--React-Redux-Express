import { Link } from "react-router-dom";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import style from "./Home.module.css";

const Home = () => {
  
  

  return (
    <div>
      <div className={style.logo}><b>Hi<span>g</span>hsc<span>o</span>res</b></div>
      <div className={style.link}>
        <Link to={"/AddNewHighsScore"}> Add new highscore</Link>
      </div>
      <ScoreBoard />
    </div>
  );
};

export default Home;



