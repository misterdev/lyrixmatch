import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, interpolate } from 'react-spring'
import { Button } from '@material-ui/core'

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const GameCard = (props) => {
    const { rot, scale, question, onResult, index } = props
    const { quote, options, answer } = question
    const [choice, makeChoice] = useState(null)

    const onAnswer = (a) => {
        if (choice === null){
            makeChoice(a)
            onResult(a === answer)
        }
    }

    return <Wrapper {...props}>
        <Card style={{ transform: interpolate([rot, scale], trans) }}>
            <Title>({index}) Who sings...</Title>
            <Quote>"{quote}"</Quote><br />
            {
                options.map((name, i) =>
                    <Answer key={i}>
                        <AnswerButton
                            variant={ choice === null || i !== answer ? "outlined" : "contained"} 
                            color={ choice === null || choice === answer ? "primary" : "secondary"}
                            onClick={() => onAnswer(i)}>
                            <h3>{name}</h3> 
                        </AnswerButton>
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
    color: #333;
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