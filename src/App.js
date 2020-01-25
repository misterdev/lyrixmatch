import React from 'react'
import styled from 'styled-components'
import { AppBar, BottomNavigation, BottomNavigationAction, Typography, Toolbar } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import PersonIcon from '@material-ui/icons/Person'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp'

import Game from './Pages/Game'
import Loaderboard from './Pages/Loaderboard'
import Profile from './Pages/Profile'

function App() {
  let page = 0
  const switchPage = (_, newPage) => {
    page = newPage
  }

  return (
    <FullscreenWrapper>
      <AppBar position="static">
        <Header>
          <Title variant="h6">
            LyriXmatch
          </Title>
        </Header>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/">
            <Page>
              <Profile />
            </Page>
          </Route>
          <Route path="/game">
            <Page>
              <Game />
            </Page>
          </Route>
          <Route path="/loaderboard">
            <Page>
              <Loaderboard />
            </Page>
          </Route>
        </Switch>
        <Navigation
          value={page}
          onChange={switchPage}
          showLabels
        >
          <Tab label="LEADERBOARD" icon={<FormatListNumberedIcon />} to="/loaderboard" />
          <Tab label="PLAY" icon={<SportsEsportsSharpIcon />} to="/game" />
          <Tab label="PROFILE" icon={<PersonIcon />} to="/" />
        </Navigation>
      </Router>
    </FullscreenWrapper>
  );
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
  background-color: blue;
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
