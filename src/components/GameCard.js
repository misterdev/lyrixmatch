import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, interpolate } from 'react-spring'
import { Button } from '@material-ui/core'

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const GameCard = (props) => {
    const { rot, scale, question } = props
    const { quote, options, answer } = question

    const [answered, setAnswered] = useState(null)
    const selectAnswer = (i) => {
        setAnswered(i)
    } 

    return <Wrapper {...props}>
        <Card style={{ transform: interpolate([rot, scale], trans) }}>
            <Title>Who sings...</Title>
            <Quote>"{quote}"</Quote><br />
            {
                options.map((name, i) =>
                    <Answer key={i}>
                        <span>👉</span> 
                        <AnswerButton onClick={() => selectAnswer(i)}>
                            <h3>{name}</h3> 
                        </AnswerButton>
                        <span>👈</span>
                    </Answer>
                )
            }
        </Card>
    </Wrapper>
}

const Wrapper = styled(animated.div)`
    position: absolute;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled(animated.div)`
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
    padding: 30px;
    box-sizing: borer-box;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    text-align: center;
`
const Quote = styled.h1`
    text-align: center;
`
const Answer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid #666;
    padding: 10px;
`
const AnswerButton = styled(Button)`
    flex-grow: 1;
`

export default GameCard