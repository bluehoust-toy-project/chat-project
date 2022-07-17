import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MessageState {
  from: string;
  to: string;
  content: string;
}

export interface FriendState {
  username: string;
}

export interface UserState {
  username: string;
  selectedFriend: FriendState;
  messages: {
    [arg0: string]: Array<MessageState>;
  };
  friends: Array<FriendState>;
}

const initialState: UserState = {
  username: 'Me',
  selectedFriend: {
    username: '',
  },
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
    user3: [],
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
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFriend(state, action: PayloadAction<FriendState>) {
      state.friends.push(action.payload);
      state.messages[action.payload.username] = [];
    },
    addMessage(state, action: PayloadAction<{ friend: FriendState; message: MessageState }>) {
      state.messages[action.payload.friend.username].push(action.payload.message);
    },
    selectFriend(state, action: PayloadAction<string>) {
      state.selectedFriend.username = action.payload;
    },
  },
});

export const { addFriend, addMessage, selectFriend } = userSlice.actions;

export default userSlice;
