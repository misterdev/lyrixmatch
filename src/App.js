import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import {
  AppBar, BottomNavigation, BottomNavigationAction, 
  Typography, Toolbar
} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"

import PersonIcon from '@material-ui/icons/Person'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp'

import Game from './Pages/Game'
import Loaderboard from './Pages/Loaderboard'
import Profile from './Pages/Profile'

import initialState from './state'

const authReducer = (user, action) => {
  switch (action.type) {
    case 'login':
      return action.payload
    case 'logout':
      return null
    default:
      return user
  }
}

const App = () => {
  const [page, setPage] = useState(0)

  const {authId, users} = initialState
  const [authUser, authDispatch] = useReducer(authReducer, users[authId])

  const switchPage = (_, newPage) => {
    setPage(newPage)
  }

  const loginHandler = (userName) => {
    // Users are indexed using their username
    const userId = userName.toLowerCase()
    // Quickly handle signup
    if (!users[userId]) {
      users[userId] = {
        name: userName
      }
    }
    authDispatch({ type: 'login', payload: users[userId]})
  }

  return (
    <FullscreenWrapper>
      <AppBar position="static">
        <Header>
          <Title variant="h6">LyriXmatch</Title>
        </Header>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/game">
            <Page>
              { authUser ? <Game /> : <Redirect to='/' />}
            </Page>
          </Route>
          <Route path="/leaderboard">
            <Page>
              { authUser ? <Loaderboard /> : <Redirect to='/' />}
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <Profile
                user={authUser}
                users={users}
                login={loginHandler}
                logout={() => authDispatch({ type: 'logout'})} />
            </Page>
          </Route>
        </Switch>
        <Navigation
          value={page}
          onChange={switchPage}
          showLabels
        >
          <Tab label="LEADERBOARD" icon={<FormatListNumberedIcon />} to="/leaderboard" />
          <Tab label="PLAY" icon={<SportsEsportsSharpIcon />} to="/game" />
          <Tab label="PROFILE" icon={<PersonIcon />} to="/" />
        </Navigation>
      </Router>
    </FullscreenWrapper>
  )
}

function Tab(props) {
  return <BottomNavigationAction component={Link} {...props} />
}

const FullscreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Navigation = styled(BottomNavigation)`
  bottom: 0;
`
const Page = styled.div`
  background-color: #999;
  height: 100%;
`
const Header = styled(Toolbar)`
  background-color: white;
  color: #666;
`
const Title = styled(Typography)`
  width: 100%;
  text-align: center;
`
export default App
