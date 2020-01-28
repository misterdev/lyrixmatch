import React, { useState, useEffect } from 'react'
import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import { useSprings, interpolate } from 'react-spring'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { Card } from '../components/styled'
import GameCard from '../components/GameCard'

const cards = [
  {
    id: 0,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 1,
    quote: 'Annie, are you ok?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 0
  },
  {
    id: 2,
    quote: 'Rockstar, Rockstar, ...',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 1
  },
  {
    id: 3,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 4,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 5,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 6,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 7,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 8,
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    id: 9,
    quote: 'Do you want to be my lover? mario',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100, opacity: 1 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000, opacity: 1 })

const Game = (p) => {
  const [isPlaying, setPlaying] = useState(false)
  const [score, setScore] = useState(null)
  const [currQuest, setCurrQuest] = useState(0)
  const [countdown, setCountdown] = useState(0)
  const [intervalCd, setIntervalCd] = useState(null)

  const [quests, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))

  const startGame = () => {
    setPlaying(true)
    setScore(0)
    setTimeout(() => restartCountdown(), 1000)
  }

  const onCardResult = (i, correct) => {
    if (correct) setScore(s => s + 1)
    showNextCard()
  }
  const showNextCard = () => {
    setCurrQuest(q => q + 1)
    setTimeout(() => {
      set(i => currQuest === cardIndex(i) ? ({x: 1000, opacity: 0}) : null)
      restartCountdown()
    }, 1000)
  }
  const restartCountdown = () => {
    clearInterval(intervalCd)
    setIntervalCd(null)
    setCountdown(5)
  }
  const cardIndex = (i) => cards.length - 1 - i

  useEffect(() => {
    if (!intervalCd && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(cd => cd - 1)
      }, 1000)
      setIntervalCd(interval)
    } else if (intervalCd && countdown === 0) {
      clearInterval(intervalCd)
      setIntervalCd(null)
      showNextCard()
    } else if(currQuest === cards.length) {
      clearInterval(intervalCd)
      setIntervalCd(null)
      setPlaying(false)
    }
  }, [countdown])

  return <Wrapper>
    {
      !isPlaying ?
        <Card>
          <h3>🥇 { score === null ? "Get Ready!" : "Play Again!" } 🥇</h3><br />
          <Fab color="primary" onClick={startGame}>
            <PlayArrowIcon />
          </Fab>
          <h4>{ score !== null && `Last score: ${score}` }</h4>
        </Card>
      :
        <>
          <GameInfo>
            <Countdown><h3>{countdown}s</h3></Countdown>
            <Score><h3>Your score: {score}/{currQuest}</h3></Score>
          </GameInfo>
          {quests.map(({ x, y, rot, scale, opacity }, i) => 
            <GameCard key={i} index={cardIndex(i) + 1} rot={rot} scale={scale} question={cards[i]}
              onResult={(res) => onCardResult(i, res)}
              style={{ opacity, transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}/>     
          )}
        </>
    }
    </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
const GameInfo = styled.div`
  z-index: 100;
  position: fixed;
  top: 80px;
  height: 60px;
  display: flex;
`

const Score = styled(Card)`
  padding: 0px 30px;
  margin: 0px 10px;
  box-sizing: border-box;
  background-color: rgba(63, 130, 38);
  color: white; 
`
const Countdown = styled(Card)`
  padding: 0px 30px;
  margin: 0px 10px;
  box-sizing: border-box;
  background-color: rgba(176, 95, 25);
  color: white; 
`

export default Game
