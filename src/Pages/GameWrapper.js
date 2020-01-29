import React, { useState, useEffect } from "react";
import { Fab } from "@material-ui/core";
import styled from "styled-components";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { Card } from "../components/styled";
import Game from "../components/Game";

const cards = [
  {
    id: 0,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 1,
    quote: "Annie, are you ok?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 0
  },
  {
    id: 2,
    quote: "Rockstar, Rockstar, ...",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 1
  },
  {
    id: 3,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 4,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 5,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 6,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 7,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 8,
    quote: "Do you want to be my lover?",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  },
  {
    id: 9,
    quote: "Do you want to be my lover? mario",
    options: ["MJ", "Sfera Ebbasta", "Spice Girls"],
    answer: 2
  }
];

const GameWrapper = props => {
  const { saveScore } = props;
  const [isPlaying, setPlaying] = useState(false);
  const [lastScore, setLastScore] = useState(null);

  const startGame = () => {
    setPlaying(true);
  };

  useEffect(() => {
    console.log("LAST SCORE?", lastScore);
    if (lastScore !== null) {
      console.log("LAST SCORE", lastScore);
      saveScore(lastScore);
      setPlaying(false);
    }
  }, [lastScore]);
  return (
    <Wrapper>
      {!isPlaying ? (
        <Card>
          <h3>🥇 {lastScore === null ? "Get Ready!" : "Play Again!"} 🥇</h3>
          <br />
          <Fab color="primary" onClick={startGame}>
            <PlayArrowIcon />
          </Fab>
          <h4>{lastScore !== null && `Last Score: ${lastScore.score}`}</h4>
        </Card>
      ) : (
        <Game cards={cards} setLastScore={setLastScore} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GameWrapper;
