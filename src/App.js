import React from 'react';
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PersonIcon from '@material-ui/icons/Person';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';

import Game from './Game/Game'

function App() {
  let page = 0
  const switchPage = (_, newPage) => {
    page = newPage
  }

  return (
    <FullscreenWrapper>
      <Router>
        <Switch>
          <Route path="/">
            <Page>
              <Game />
            </Page>
          </Route>
          <Route path="/game">
            <Page>
              <Game />
            </Page>
          </Route>
          <Route path="/loaderboard">
            <Page>
              <Game />
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
  background-color: green;
`

const Navigation = styled(BottomNavigation)`
  bottom: 0;
`

const Page = styled.div`
  background-color: blue;
  height: 100%;
`

export default App
