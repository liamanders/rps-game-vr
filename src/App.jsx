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
  const [playerResult, setPlayerResult] = useState('Let\'s see who wins!')
  const [gameOver, setGameOver] = useState(false)
  const [playerName, setPlayerName] = useState('Player')


  const choices = [rock, paper, scissors]

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

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };
  // call for calculateResult function //


  const calculateResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setPlayerResult("It's a tie!");
    } else if (
      (playerChoice === rock && computerChoice === scissors) ||
      (playerChoice === paper && computerChoice === rock) ||
      (playerChoice === scissors && computerChoice === paper)
    ) {
      setPlayerResult("You win!");
      setPlayerPoints(playerPoints + 1);
    } else {
      setPlayerResult("Computer wins!");
      setComputerPoints(computerPoints + 1);
    } 
    // Call for gameover function.
    checkGameOver();
  };

  const checkGameOver = () => {
    if (playerPoints === 5 || computerPoints === 5) {
      setGameOver(true);
    }
  };

  const getImage = (choice) => {
    switch (choice) {
      case rock:
        return rock;
      case paper:
        return paper;
      case scissors:
        return scissors;
      default:
        return rock;
    }
  };


    return (
      <>
        <section className="container">
          <div className="result_area">
            <div className="result_images">
              <span className="playerResult">
                <img src={getImage(playerChoice)} alt="Rock Hand" />
              </span>
              <span className="computerResult">
                <img src={getImage(computerChoice)} alt="Rock Hand" />
              </span>
            </div>
            <div className="score">
              {playerName} {playerPoints} / {computerPoints} Computer
            </div>
            <div className="result">{playerResult}</div>
          {gameOver && <div className="score">Game Over!</div>}
          </div>
          <div className="option_images">
            <span className="option_image" onClick={() => handlePlayerChoice(rock)}>
              <img src={rock} alt="Rock Hand" />
              <h3>Rock</h3>
            </span>
            <span className="option_image" onClick={() => handlePlayerChoice(paper)}>
              <img src={paper} alt="Paper Hand" />
              <h3>Paper</h3>
            </span>
            <span className="option_image" onClick={() => handlePlayerChoice(scissors)}>
              <img src={scissors} alt="Scissors Hand" />
              <h3>Scissors</h3>
            </span>
          </div>
        </section>
      </>
    )
  }

  export default App
