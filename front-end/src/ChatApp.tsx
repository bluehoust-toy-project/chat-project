import { Grid } from '@mui/material';

import Header from './components/Header';
import FriendListBox from './components/FriendListBox';
import ChatBox from './components/ChatBox';

const ChatApp = () => {
  return (
    <main style={{ backgroundColor: 'lavender', height: '100vh' }}>
      <Header />
      <Grid container spacing={0}>
        <FriendListBox />
        <ChatBox />
      </Grid>
    </main>
  );
};

export default ChatApp;
