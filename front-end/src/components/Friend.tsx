import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

type FriendProps = {
  username: string | null;
  selectFriend: (username: string | null) => void;
};

function Friend({ username, selectFriend }: FriendProps) {
  const FriendContainer = styled.div`
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
    <FriendContainer>
      <div className="friend-icon">
        {/* <AccountCircleOutlinedIcon /> */}
        {username && <Avatar {...stringAvatar(username)} />}
      </div>
      <div className="friend-username" onClick={(e) => selectFriend(e.currentTarget.textContent)}>
        {username}
      </div>
    </FriendContainer>
  );
}

export default Friend;
