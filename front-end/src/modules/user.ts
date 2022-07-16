import produce from 'immer';

const ADD_FRIEND = 'user/ADD_FRIEND' as const;
const ADD_MESSAGE = 'user/ADD_MESSAGE' as const;

type Friend = {
  username: string;
};

type Message = {
  from: string;
  to: string;
  content: string;
};

export const addFriend = (friend: Friend) => ({ type: ADD_FRIEND, payload: friend });
export const addMessage = (friend: Friend, message: Message) => ({ type: ADD_MESSAGE, payload: { friend, message } });

type UserAction = ReturnType<typeof addFriend> | ReturnType<typeof addMessage>;

type UserState = {
  username: string;
  messages: {
    [arg0: string]: Array<Message>;
  };
  friends: Array<Friend>;
};

const initialState = {
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

function user(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case ADD_FRIEND:
      return produce(state, (draft) => {
        draft.friends.push(action.payload);
        draft.messages[action.payload.username] = [];
      });
    case ADD_MESSAGE:
      return produce(state, (draft) => {
        draft.messages[action.payload.friend.username].push(action.payload.message);
      });
    default:
      return state;
  }
}

export default user;
