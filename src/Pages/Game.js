import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import { useSprings, useTransition, animated, interpolate } from 'react-spring'

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
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const Game = (p) => {
  const [isPlaying, setPlaying] = useState(true)
  const [score, setScore] = useState(0)
  const [currQuest, setCurrQuest] = useState(0)
  
  const [quests, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))

  const startGame = () => {
    setPlaying(true)
  }
  const onCardResult = (i, correct) => {
    if (correct) setScore(s => s + 1)
    setCurrQuest(q => q + 1)
    setTimeout(() => {
      set(i => currQuest === cardIndex(i) ? ({x: 1000}) : null)
    }, 1500)
  }
  const cardIndex = (i) => cards.length - 1 - i

  return <Wrapper>
    {
      !isPlaying ?
        <Card>
          <h3>🥇 Get Ready! 🥇</h3><br />
          <Fab color="primary" onClick={startGame}>
            <PlayArrowIcon />
          </Fab>
        </Card>
      :
        <>
          <Score><h2>Your score: {score}/{currQuest}</h2></Score>
          {quests.map(({ x, y, rot, scale }, i) => 
            <GameCard key={i} index={cardIndex(i) + 1} rot={rot} scale={scale} question={cards[i]}
              onResult={(res) => onCardResult(i, res)}
              style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}/>     
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
const Score = styled.div`
  z-index: 100;
  position: fixed;
  top: 70px;
  width: 200px;
  height: 70px;
  border-radius: 8px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Game
