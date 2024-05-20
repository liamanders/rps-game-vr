import { useState, useEffect } from 'react'
import rock from '/images/rock.png';
import paper from '/images/paper.png';
import scissors from '/images/scissors.png';

import './App.css'
function App() {
  const [playerChoice, setPlayerChoice] = useState(rock)
  const [computerChoice, setComputerChoice] = useState(rock)
  const [playerPoints, setPlayerPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [result, setResult] = useState('Let\'s see who wins!')
  const [gameOver, setGameOver] = useState(false)
  const [playerName, setPlayerName] = useState('Player')


  const choices = [rock, paper, scissors]
  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };
  // call for calculateResult function //


  useEffect(() => {
    const askPlayerName = () => {
      let newName = prompt("Enter your name to start the game: ");
      while (!newName || !isNaN(newName)) {
        newName = prompt("Error: Invalid input. Name cannot be empty or numeric.");
      }
      setPlayerName(newName);
    };

    askPlayerName();
  },[]);


  const calculateResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setPlayerResult("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setPlayerResult("You win!");
      setPlayerPoints(playerPoints + 1);
    } else {
      setPlayerResult("Computer wins!");
      setComputerPoints(computerPoints + 1);
    } 
    // Call for gameover function.
  };


    return (
      <>
        <section className="container">
          <div className="result_area">
            <div className="result_images">
              <span className="playerResult">
                <img src={playerChoice} alt="Rock Hand" />
              </span>
              <span className="computerResult">
                <img src={computerChoice} alt="Rock Hand" />
              </span>
            </div>
            <div className="score">
              {playerName} {playerPoints} / {computerPoints} Computer
            </div>
            <div className="score">{result}</div>
          </div>
          <div className="option_images">
            <span className="option_image">
              <img src={rock} alt="Rock Hand" />
              <h3>Rock</h3>
            </span>
            <span className="option_image">
              <img src={paper} alt="Paper Hand" />
              <h3>Paper</h3>
            </span>
            <span className="option_image">
              <img src={scissors} alt="Scissors Hand" />
              <h3>Scissors</h3>
            </span>
          </div>
        </section>
      </>
    )
  }

  export default App
