import React from 'react';

import { useDispatch } from 'react-redux';
import { select } from '../modules/friend';

import Friend from '../components/Friend';

type FriendContainerProps = {
  username: string;
};

function FriendContainer({ username }: FriendContainerProps) {
  const dispatch = useDispatch();

  return <Friend username={username} selectFriend={(username: string) => dispatch(select(username))} />;
}

export default FriendContainer;
