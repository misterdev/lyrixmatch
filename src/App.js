import React from 'react';
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';

import Game from './Game/Game'

function App() {
  let page = 0

  const switchPage = (e, newPage) => {
    page = newPage
  }

  return (
    <FullscreenWrapper>
      <Content>

      </Content>
      <Navigation value={page} onChange={switchPage} showLabels>
        <BottomNavigationAction icon={<FormatListNumberedIcon />} />
        <BottomNavigationAction icon={<SportsEsportsSharpIcon />} />
        <BottomNavigationAction icon={<PersonIcon />} />
      </Navigation>
    </FullscreenWrapper>
  );
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

const Content = styled.div`
  height: 100%;
  background-color: green;
`

export default App;
