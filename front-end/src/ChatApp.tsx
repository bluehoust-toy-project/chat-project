import { Grid } from '@mui/material';
import { useCallback, useState } from 'react';

import Header from './Header';
import FriendList from './FriendList';
import Chat from './Chat';

type SelectedUser = {
  username: string;
};

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
  const [selectedUser, setSelectedUser] = useState<SelectedUser>({ username: 'user3' });
  const [user, setUser] = useState<User>({
    username: 'Me',
    messages: {
      user1: [
        {
          from: 'Me',
          to: 'user1',
          content: 'Hi, user1',
        },
        {
          from: 'user1',
          to: 'Me',
          content: 'Hi, Me',
        },
      ],
      user2: [
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content: 'Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
        {
          from: 'Me',
          to: 'user2',
          content:
            'Hi, user2 Hi, user2 Hi, user2 Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2Hi, user2',
        },
        {
          from: 'user2',
          to: 'Me',
          content: 'Hi, Me',
        },
      ],
      user3: [
        // {
        //     from: 'Me',
        //     to: 'user3',
        //     content: 'Hi, user3',
        // },
        // {
        //     from: 'user3',
        //     to: 'Me',
        //     content: 'Hi, Me',
        // },
      ],
    },
    friends: [
      {
        username: 'user1',
      },
      {
        username: 'user2',
      },
      {
        username: 'user3',
      },
    ],
  });

  return (
    <main style={{ backgroundColor: 'lavender' }}>
      <Header />
      <Grid container spacing={0}>
        <FriendList friends={user.friends} />
        <Chat selectedUser={selectedUser} username={user.username} messages={user.messages[selectedUser.username]} />
      </Grid>
    </main>
  );
}

export default ChatApp;
