import { useDispatch, useSelector } from 'react-redux';

import FriendList from '../components/FriendList';

import { RootState } from '../modules';
import { changeBoolean, changeText } from '../modules/inputs';
import { addFriend } from '../modules/user';

function FriendListContainer() {
  const friends = useSelector((state: RootState) => state.user.friends);
  const dispatch = useDispatch();

  return (
    <FriendList
      friends={friends}
      addFriend={(friend: { username: string }) => dispatch(addFriend(friend))}
      changeText={(value: string, name: string) => dispatch(changeText(value, name))}
      changeBoolean={(value: boolean, name: string) => dispatch(changeBoolean(value, name))}
    />
  );
}

export default FriendListContainer;
