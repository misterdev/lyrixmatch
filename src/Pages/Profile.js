import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

function Profile(props) {
    return <Wrapper>
        {
            props.user ?
                <Card>
                    <h2>Welcome</h2>
                    <h1>Devid</h1>
                    <Button>
                        LOGOUT
                    </Button>
                </Card>
            :
                <Card>
                    <h2>Welcome</h2>
                    <h1>Devid</h1>
                    <Button>
                        LOGIN
                    </Button>
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