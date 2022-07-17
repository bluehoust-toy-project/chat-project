import { Grid } from '@mui/material';

import { useSelector } from 'react-redux';
import { RootState } from './modules';

import Header from './components/Header';
import FriendList from './components/FriendList';
import Chat from './components/Chat';

const ChatApp = () => {
  const friends = useSelector((state: RootState) => state.user.friends);

  return (
    <main style={{ backgroundColor: 'lavender', height: '100vh' }}>
      <Header />
      <Grid container spacing={0}>
        <FriendList friends={friends} />
        <Chat />
      </Grid>
    </main>
  );
};

export default ChatApp;
