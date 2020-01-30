import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSprings, interpolate } from "react-spring";

import { Card } from "../components/styled";
import GameCard from "../components/GameCard";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
  opacity: 1
});
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000, opacity: 1 });

const Game = props => {
  const { cards, setLastScore } = props;
  const [score, setScore] = useState(0);
  const [currQuest, setCurrQuest] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [intervalCd, setIntervalCd] = useState(null);

  const [quests, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const onCardResult = (i, correct) => {
    if (countdown > 0) {
      if (correct) setScore(s => s + 1);
      clearInterval(intervalCd);
      showNextCard();
    }
  };
  const showNextCard = () => {
    setCurrQuest(q => q + 1);
    setTimeout(() => {
      set(i => (currQuest === cardIndex(i) ? { x: 1000, opacity: 0 } : null));
      restartCountdown();
    }, 1000);
  };
  const restartCountdown = () => {
    clearInterval(intervalCd);
    setIntervalCd(null);
    setCountdown(20);
  };
  const cardIndex = i => cards.length - 1 - i;

  useEffect(() => {
    console.log("GAMEUSEFFECT");
    // If game not started
    if (countdown === null) {
      restartCountdown();
    // If the countdown isn't running
    } else if (!intervalCd && countdown > 0) {
      console.log("1");
      const interval = setInterval(() => {
        setCountdown(cd => cd - 1);
      }, 1000);
      setIntervalCd(interval);
    // Switch card when time is over
    } else if (intervalCd && countdown === 0 && currQuest !== cards.length) {
      console.log("2");
      clearInterval(intervalCd);
      setIntervalCd(null);
      showNextCard();
    // If it's the last question
    } else if (currQuest === cards.length) {
      console.log("3");
      clearInterval(intervalCd);
      setTimeout(() =>
        setLastScore({
          score,
          date: new Date().toLocaleString()
        }), 1500)
    }
  }, [countdown, currQuest]);

  return (
    <Wrapper>
      <GameInfo>
        <Countdown>
          <h3>{countdown}s</h3>
        </Countdown>
        <Score>
          <h3>
            Your score: {score}/{currQuest}
          </h3>
        </Score>
      </GameInfo>
      {quests.map(({ x, y, rot, scale, opacity }, i) => (
        <GameCard
          key={i}
          index={cardIndex(i) + 1}
          rot={rot}
          scale={scale}
          card={cards[i]}
          onResult={res => onCardResult(i, res)}
          style={{
            opacity,
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            )
          }}
        />
      ))}
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
const GameInfo = styled.div`
  z-index: 100;
  position: fixed;
  top: 80px;
  height: 60px;
  display: flex;
`;

const Score = styled(Card)`
  padding: 0px 30px;
  margin: 0px 10px;
  box-sizing: border-box;
  background-color: rgba(63, 130, 38);
  color: white;
`;
const Countdown = styled(Card)`
  padding: 0px 30px;
  margin: 0px 10px;
  box-sizing: border-box;
  background-color: rgba(176, 95, 25);
  color: white;
`;

export default Game;
