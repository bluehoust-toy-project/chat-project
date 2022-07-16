import { useDispatch, useSelector } from 'react-redux';
import Chat from '../components/Chat';
import { RootState } from '../modules';
import { changeText } from '../modules/inputs';
import { addMessage } from '../modules/user';

function ChatContainer() {
  const selectedFriend = useSelector((state: RootState) => state.friend);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      {selectedFriend.username && (
        <Chat
          selectedFriend={selectedFriend}
          username={user.username}
          messages={user.messages[selectedFriend.username]}
          addMessage={(friend: { username: string }, message: { from: string; to: string; content: string }) =>
            dispatch(addMessage(friend, message))
          }
          changeText={(value: string, name: string) => dispatch(changeText(value, name))}
        />
      )}
    </>
  );
}

export default ChatContainer;
