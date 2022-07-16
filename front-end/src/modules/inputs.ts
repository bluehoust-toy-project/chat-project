const CHANGE_TEXT = 'inputs/CHANGE_TEXT' as const;
const CHANGE_BOOLEAN = 'inputs/CHANGE_BOOLEAN' as const;

export const changeText = (value: string, name: string) => ({ type: CHANGE_TEXT, value, name });
export const changeBoolean = (value: boolean, name: string) => ({ type: CHANGE_BOOLEAN, value, name });

type textInputType = {
  name: string;
  value: string;
};

type booleanInputType = {
  name: string;
  value: boolean;
};

type InputState = {
  header_username: textInputType;
  friend_username: textInputType;
  friend_open_dialog: booleanInputType;
  chat_message: textInputType;
};

type InputAction = ReturnType<typeof changeText> | ReturnType<typeof changeBoolean>;

const initialState = {
  header_username: {
    name: 'header_username',
    value: '',
  },
  friend_username: {
    name: 'friend_username',
    value: '',
  },
  friend_open_dialog: {
    name: 'friend_open_dialog',
    value: false,
  },
  chat_message: {
    name: 'chat_message',
    value: '',
  },
};

function inputs(state: InputState = initialState, action: InputAction) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        [action.name]: {
          name: action.name,
          value: action.value,
        },
      };
    case CHANGE_BOOLEAN:
      return {
        ...state,
        [action.name]: {
          name: action.name,
          value: !action.value,
        },
      };
    default:
      return state;
  }
}

export default inputs;
