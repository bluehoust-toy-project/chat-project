import { Dialog, Grid } from '@mui/material';
import { useCallback, useState } from 'react';

import Header from './components/Header';
import FriendList from './components/FriendList';
import Chat from './components/Chat';
import { useSelector } from 'react-redux';
import { RootState } from './modules';
import FriendListContainer from './containers/FriendListContainer';

type User = {
  username: string;
  messages: {
    [arg0: string]: Array<{
      from: string;
      to: string;
      content: string;
    }> | null;
  };
  friends: Array<{ username: string }>;
};

function ChatApp() {
  const selectedUser = useSelector((state: RootState) => state.friend);
  const user = useSelector((state: RootState) => state.user);

  return (
    <main style={{ backgroundColor: 'lavender', height: '100vh' }}>
      <Header />
      <Grid container spacing={0}>
        <FriendListContainer />
        {selectedUser.username && (
          <Chat selectedUser={selectedUser} username={user.username} messages={user.messages[selectedUser.username]} />
        )}
      </Grid>
    </main>
  );
}

export default ChatApp;
