import React, { useState, useReducer } from "react";
import styled from "styled-components";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Toolbar
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import SportsEsportsSharpIcon from "@material-ui/icons/SportsEsportsSharp";

import GameWrapper from "./pages/GameWrapper";
import Loaderboard from "./pages/Loaderboard";
import Profile from "./pages/Profile";

import { dummyScores, dummyUsers } from "./utils/defaults";
import * as storage from "./utils/storage";

const authReducer = (user, action) => {
  switch (action.type) {
    case "login":
      storage.setAuthId(action.user.id);
      return action.user;
    case "logout":
      storage.setAuthId(null);
      return null;
    case "newScore":
      user.scores.push(action.newScore);
      return user;
    default:
      return user;
  }
};

const App = () => {
  storage.init(dummyScores, dummyUsers);
  const authId = storage.getAuthId();
  const [authUser, authUserDispatch] = useReducer(
    authReducer,
    storage.getUser(authId)
  );
  const [scores, setScores] = useState(storage.getScores());
  const [page, setPage] = useState(0);

  const addScore = score => {
    const newScore = {
      ...score,
      userId: authId
    };
    console.log("SAVING NEW SCORE", newScore, authUser);
    setScores(scores => {
      scores.push(newScore);
      return scores;
    });
    authUserDispatch({ type: "newScore", newScore });
    storage.addNewScore(newScore);
  };

  const switchPage = (_, newPage) => setPage(newPage);

  const loginHandler = userName => {
    // Users are indexed using their username
    const userId = userName.toLowerCase();
    let user = storage.getUser(userId);
    let scores = storage.getScoresByUser(userId);
    // Quickly handle signup
    if (!user) {
      user = storage.addUser(userId, userName);
    }
    user.scores = scores;
    authUserDispatch({ type: "login", user });
  };

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
              {authUser ? (
                <GameWrapper saveScore={addScore} />
              ) : (
                <Profile
                  user={authUser}
                  login={loginHandler}
                  logout={() => authUserDispatch({ type: "logout" })}
                />
              )}
            </Page>
          </Route>
          <Route path="/leaderboard">
            <Page>
              <Loaderboard scores={scores} />
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <Profile
                user={authUser}
                login={loginHandler}
                logout={() => authUserDispatch({ type: "logout" })}
              />
            </Page>
          </Route>
        </Switch>
        <Navigation value={page} onChange={switchPage} showLabels>
          <Tab
            label="LEADERBOARD"
            icon={<FormatListNumberedIcon />}
            to="/leaderboard"
          />
          <Tab label="PLAY" icon={<SportsEsportsSharpIcon />} to="/game" />
          <Tab label="PROFILE" icon={<PersonIcon />} to="/" />
        </Navigation>
      </Router>
    </FullscreenWrapper>
  );
};

const Tab = props => <BottomNavigationAction component={Link} {...props} />;

const FullscreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Navigation = styled(BottomNavigation)`
  bottom: 0;
`;
const Page = styled.div`
  background-color: #999;
  height: 100%;
`;
const Header = styled(Toolbar)`
  background-color: white;
  color: #666;
`;
const Title = styled(Typography)`
  width: 100%;
  text-align: center;
`;
export default App;
