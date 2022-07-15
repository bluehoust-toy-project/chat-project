import React from 'react';
import { useDispatch } from 'react-redux';
import Friend from '../components/Friend';
import { RootState } from '../modules';
import { select } from '../modules/friend';

type FriendContainerProps = {
  username: string | null;
};

function FriendContainer({ username }: FriendContainerProps) {
  const dispatch = useDispatch();

  const selectFriend = (username: string | null) => {
    dispatch(select(username));
  };

  return <Friend username={username} selectFriend={selectFriend} />;
}

export default FriendContainer;
