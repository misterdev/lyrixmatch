import React, { useState, useEffect, useReducer } from "react";
import { Fab } from "@material-ui/core";
import styled from "styled-components";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import { Card } from "../components/styled";
import Game from "../components/Game";
import { getCards } from '../utils/mxm-api'

const GameWrapper = props => {
  const { saveScore } = props;
  const [isPlaying, setPlaying] = useState(false);
  const [lastScore, setLastScore] = useState(null);
  const [cards, setCards] = useState(null)

  const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const startGame = () => {
    getCards(randomInt(18)).then(c => {
      setCards(c)
      setPlaying(true)
    })
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
