const SELECT_FRIEND = 'friend/SELECT_FRIEND' as const;

export const selectFriend = (username: string) => ({ type: SELECT_FRIEND, payload: username });

type FriendAction = ReturnType<typeof selectFriend>;

type FriendState = {
  username: string;
};

const initialState = {
  username: '',
};

function friend(state: FriendState = initialState, action: FriendAction): FriendState {
  switch (action.type) {
    case SELECT_FRIEND:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}

export default friend;
