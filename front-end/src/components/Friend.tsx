/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar } from '@mui/material';

import React from 'react';

type FriendProps = {
  username: string;
  selectFriend: (username: string) => void;
};

function Friend({ username, selectFriend }: FriendProps) {
  const friendStyle = css`
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 5px 0;

    .friend-icon {
      margin: 0 10px;
    }

    .friend-username {
      font-size: 1.3rem;
      cursor: pointer;
    }
  `;

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
      <div className="friend-icon">{username && <Avatar {...stringAvatar(username)} />}</div>
      <div
        className="friend-username"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => selectFriend(e.currentTarget.innerHTML)}
      >
        {username}
      </div>
    </div>
  );
}

export default Friend;
