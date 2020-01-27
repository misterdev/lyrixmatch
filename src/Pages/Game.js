import { render } from 'react-dom'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import { useSprings, animated, interpolate } from 'react-spring'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { Card } from '../utils/styled-ui'

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
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Game() {
  const [isPlaying, setPlaying] = useState(false)
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
          <CardW key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            <GameCard style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
          </CardW>
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
const CardW = styled(animated.div)`
  position: absolute;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GameCard = styled(animated.div)`
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 85vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`
export default Game
