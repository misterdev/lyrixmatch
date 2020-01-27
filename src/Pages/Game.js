import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import { useSprings, animated, interpolate } from 'react-spring'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { Card } from '../components/styled'
import GameCard from '../components/GameCard'

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const Game = (p) => {
  const [isPlaying, setPlaying] = useState(true)
  const [score, setScore] = useState(0)

  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above

  return <Wrapper>
    {
      !isPlaying ?
        <Card>
          <h3>🥇 Get Ready! 🥇</h3><br />
          <Fab color="primary" onClick={() => setPlaying(true)}>
            <PlayArrowIcon />
          </Fab>
        </Card>
      :
        props.map(({ x, y, rot, scale }, i) => (
          <GameCard key={i} index={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }} rot={rot} scale={scale}/>
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
