import produce from 'immer';

const ADD_FRIEND = 'user/ADD_FRIEND' as const;

type Friend = {
  username: string;
};

export const addFriend = (friend: Friend) => ({ type: ADD_FRIEND, payload: friend });

type UserAction = ReturnType<typeof addFriend>;

type UserState = {
  username: string;
  messages: {
    [arg0: string]: Array<{
      from: string;
      to: string;
      content: string;
    }>;
  };
  friends: Array<{
    username: string;
  }>;
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
      });
    default:
      return state;
  }
}

export default user;
