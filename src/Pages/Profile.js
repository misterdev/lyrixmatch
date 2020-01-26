import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Paper } from '@material-ui/core'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const Profile = (props) => {
    const { user, login, logout } = props
    const [ userName, setUsername ] = useState('')

    const onInputChage = (e) => setUsername(e.target.value)

    return <Wrapper>
        { user ?
            <Card>
                <h2>Welcome <b>{user.name}</b></h2>
                <Button variant="contained" color="primary" onClick={() => logout()}>
                    LOGOUT
                </Button>
                <br/><br/>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                { user.scores.length == 0 ?
                                    <TableCell align="center">PLAY THE GAME TO SEE YOUR SCORES HERE!</TableCell>
                                :
                                    <>
                                        <TableCell align="center">SCORE</TableCell>
                                        <TableCell align="center">DATE</TableCell>
                                    </>
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            { user.scores.map( (s, key) => 
                                <TableRow key={key}>
                                    <TableCell align="center">{s.score}</TableCell>
                                    <TableCell align="center">{s.date}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        :
            <Card>
                <h2>What's your name?</h2>
                <form>
                    <Input value={userName} onChange={onInputChage} placeholder="Elon, Mark, Steve,..."> </Input>
                    <Button variant="contained" color="primary" onClick={() => login(userName)}>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`
const Card = styled.div`
    padding: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TableHeader = styled(TableHead)`
    background-color: #bbb;
`

export default Profile