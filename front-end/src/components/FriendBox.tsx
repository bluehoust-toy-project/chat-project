/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar } from '@mui/material';

import React from 'react';
import { useAppDispatch } from '../modules';
import { FriendState, selectFriend } from '../modules/userSlice';

interface FriendProps {
  friend: FriendState;
}

const FriendBox = ({ friend }: FriendProps) => {
  const dispatch = useAppDispatch();

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
    };
  }

  return (
    <div css={friendStyle}>
      <div style={{ margin: '0 10px' }}>
        <Avatar {...stringAvatar(friend.username)} />
      </div>
      <div
        style={{ fontSize: '1.3rem', cursor: 'pointer' }}
        className="friend-username"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => dispatch(selectFriend(e.currentTarget.innerHTML))}
      >
        {friend.username}
      </div>
    </div>
  );
};

const friendStyle = css`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 5px 0;
`;

export default FriendBox;