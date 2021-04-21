import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';


const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(cors());


const highscores = [  {
  id: 1,
  game: {
    id: 1,
    title: "Tetris"
  }, 
  player: "John Doe",
  date: "2019-01-01 12:00",
  score: "10100"
},
{ 
  id: 2,
  game: {
    id: 1,
    title: "Tetris"
  },
  player: "Jane Doe",
  date: "2019-02-02 21:14",
  score: "45200"
},
{
  id: 3,
  game: {
    id: 1,
    title: "Tetris"
  },
  player: "Janne Doe",
  date: "2020-03-03 18:30",
  score: "35100"
},
{
  id: 4,
  game: {
    id: 1,
    title: "Tetris"
  },
  player: "John Doe",
  date: "2017-03-03 17:53",
  score: "53060"
},
{
  id: 5,
  game: {
    id: 2,
    title: "Pac-Man"
  },
  player: "William Parker",
  date: "2019-03-03 19:41",
  score: "37900"
},
{
  id: 6,
  game: {
    id: 2,
    title: "Pac-Man"
  },
  player: "James Parker",
  date: "2019-03-03 15:00",
  score: "53900"
},
{
  id: 7,
  game: {
    id: 2,
    title: "Pac-Man"
  },
  player: "Janet Parker",
  date: "2019-03-03 15:00",
  score: "78000"
},

{
  id: 8,
  game: {
    id: 3,
    title: "Asteroids"
  },
  player: "Andrew Doe",
  date: "2019-03-03 15:00",
  score: "300000"
},
{
  id: 9,
  game: {
    id: 2,
    title: "Pac-Man"
  },
  player: "Stephan Parker",
  date: "2019-03-03 15:00",
  score: "200000"
},
{
  id: 10,
  game: {
    id: 3,
    title: "Asteroids"
  },
  player: "Antwoa Doe",
  date: "2019-03-03 15:00",
  score: "994530"
},
{
  id: 11,
  game: {
    id: 3,
    title: "Asteroids"
  },
  player: "Ashley Doe",
  date: "2019-03-03 15:00",
  score: "500000"
},
{
  id: 12,
  game: {
    id: 2,
    title: "Pac-Man"
  },
  player: "Jane Parker",
  date: "2019-03-03 15:00",
  score: "700000"
},
{
  id: 13,
  game: {
    id: 2,
    title: "Pac-Man"
  },
  player: "Jasmine Parker",
  date: "2019-03-03 15:00",
  score: "450000"
}

];

const games = [
  {
      id: 1,
      title: "Tetris",
      description: "Lorem ipsum dolor sit amet",
      genre: "puzzle",
      releaseYear: 1984,
      imageUrl: "https://via.placeholder.com/380x380.png?text=Tetris"
  },
  {
      id: 2,
      title: "Pac-Man",
      description: "Lorem ipsum dolor sit amet",
      genre: "labyrinth",
      releaseYear: 1980,
      imageUrl: "https://via.placeholder.com/380x380.png?text=Pac-Man"        
  },
  {
      id: 3,
      title: "Asteroids",
      description: "Lorem ipsum dolor sit amet",
      genre: "shoot'em up",
      releaseYear: 1979,
      imageUrl: "https://via.placeholder.com/380x380.png?text=Asteroids"        
  }
];

// Routes / Endpoints
  // GET /api/highscores
app.get("/api/highscores", (req, res) => {
  res.json(highscores);
}); 


// GET /api/games
app.get("/api/games", (req, res) => {
  res.json(games);
});


// POST /api/highscores
app.post("/api/highscores", (req, res) => {
  const highscore = req.body;

  highscore.id = uuidv4();

    if (highscore.game === "Tetris"){
      highscore.game = { id: 1, title: "Tetris"};
    }
    else if (highscore.game === "Pac-Man") {
      highscore.game = { id: 2, title: "Pac-Man"};
    }
    else if (highscore.game === "Asteroids"){
      highscore.game = { id: 3, title: "Asteroids"};
    }
  
  highscores.push(highscore);

  res.status(201).json(highscore);
  console.log(`Post requst: ${res.statusMessage} ${res.statusCode}`);
});

app.listen(port, () => {
  console.log(`Server running and listening at http://localhost:${port}`)
});
 