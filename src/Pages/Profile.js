import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '@material-ui/core'

const Profile = (props) => {
    const { user, login, logout } = props

    const [userName, setUsername] = useState('')
    const onInputChage = (e) => {
        setUsername(e.target.value)
    }

    const handle = () => {}
    return <Wrapper>
        {
            user ?
                <Card>
                    <h2>Welcome <b>{user.name}</b></h2>
                    <Button variant="contained" color="primary" onClick={() => logout()}>
                        LOGOUT
                    </Button>
                </Card>
            :
                <Card>
                    <h2>What's your name?</h2>
                    <form>
                        <Input value={userName} onChange={onInputChage} placeholder="Elon, Mark, Steve,..."> </Input>
                        <Button variant="contained" color="primary" onClick={() => login({name: userName})}>
                            LOGIN
                        </Button>
                    </form>
                </Card>
        }
    </Wrapper>
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #999;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
`
const Card = styled.div`
    padding: 10%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default Profile