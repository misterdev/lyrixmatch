import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import { useSprings, animated, interpolate } from 'react-spring'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { Card } from '../components/styled'
import GameCard from '../components/GameCard'

const cards = [
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Annie, are you ok?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 0
  },
  {
    quote: 'Rockstar, Rockstar, ...',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 1
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
  {
    quote: 'Do you want to be my lover?',
    options: [ 'MJ', 'Sfera Ebbasta', 'Spice Girls' ],
    answer: 2
  },
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const Game = (p) => {
  const [isPlaying, setPlaying] = useState(true)
  // const [score, setScore] = useState(0)

  const [quests, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))

  const startGame = () => {
    setPlaying(true)
  }

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
        quests.map(({ x, y, rot, scale }, i) => (
          <GameCard key={i} index={i} rot={rot} scale={scale} question={cards[i]}
            style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}/>
        ))
    }
    </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Game
