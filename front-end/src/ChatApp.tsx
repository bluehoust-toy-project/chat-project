import { Grid } from '@mui/material';

import FriendListContainer from './containers/FriendListContainer';
import ChatContainer from './containers/ChatContainer';
import HeaderContainer from './containers/HeaderContainer';

function ChatApp() {
  return (
    <main style={{ backgroundColor: 'lavender', height: '100vh' }}>
      <HeaderContainer />
      <Grid container spacing={0}>
        <FriendListContainer />
        <ChatContainer />
      </Grid>
    </main>
  );
}

export default ChatApp;
