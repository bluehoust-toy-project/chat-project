const SELECT = 'friend/SELECT' as const;

export const select = (username: string) => ({ type: SELECT, payload: username });

type FriendAction = ReturnType<typeof select>;

type FriendState = {
  username: string;
};

const initialState = {
  username: '',
};

function friend(state: FriendState = initialState, action: FriendAction): FriendState {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}

export default friend;
