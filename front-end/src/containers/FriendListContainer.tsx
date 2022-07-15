import { useDispatch, useSelector } from 'react-redux';
import FriendList from '../components/FriendList';
import { RootState } from '../modules';
import { addFriend } from '../modules/user';

function FriendListContainer() {
  const friends = useSelector((state: RootState) => state.user.friends);
  const dispatch = useDispatch();

  const clickAddButton = (friend: { username: string }) => {
    dispatch(addFriend(friend));
  };

  return <FriendList friends={friends} clickAddFriend={clickAddButton} />;
}

export default FriendListContainer;
