import React, { useState, useReducer } from "react";
import styled from "styled-components";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Toolbar
} from "@material-ui/core";

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
  const [page, setPage] = useState(1);

  const addScore = score => {
    const newScore = {
      ...score,
      userId: authId
    };
    setScores(scores => {
      scores.push(newScore);
      return scores;
    });
    authUserDispatch({ type: "newScore", newScore });
    storage.addNewScore(newScore);
  };

  const switchPage = (a, newPage) => {
    setPage(newPage);
  } 

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
      <Content>
        <TabPage page={page} index={0}>
          <Loaderboard scores={scores} />
        </TabPage>
        <TabPage page={page} index={1}>
          {authUser ? (
            <GameWrapper saveScore={addScore} />
          ) : (
            <Profile
              user={authUser}
              login={loginHandler}
              logout={() => authUserDispatch({ type: "logout" })}
            />
          )}
        </TabPage>
        <TabPage page={page} index={2}>
          <Profile
            user={authUser}
            login={loginHandler}
            logout={() => authUserDispatch({ type: "logout" })}
          />
        </TabPage>
      </Content>
      <Navigation value={page} onChange={switchPage} showLabels>
        <BottomNavigationAction
          label="LEADERBOARD"
          icon={<FormatListNumberedIcon />}
        />
        <BottomNavigationAction
          label="PLAY"
          icon={<SportsEsportsSharpIcon />}
        />
        <BottomNavigationAction label="PROFILE" icon={<PersonIcon />} />
      </Navigation>
    </FullscreenWrapper>
  );
};

const TabPage = ({ children, page, index }) => (
  <Page hidden={page !== index}>{children}</Page>
);

const FullscreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Navigation = styled(BottomNavigation)`
  bottom: 0;
  width: 100%;
  z-index: 10;
`;
const Header = styled(Toolbar)`
  background-color: white;
  color: #666;
`;
const Title = styled(Typography)`
  width: 100%;
  text-align: center;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: #85aded;
`;
const Page = styled.div`
  height: calc(100vh - 120px);
  width: 100%;
  position: absolute;
`;
export default App;
