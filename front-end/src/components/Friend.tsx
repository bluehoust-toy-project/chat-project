import styled from '@emotion/styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react';

type FriendProps = {
  username: string;
};

function Friend({ username }: FriendProps) {
  const FriendContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 5px 0;

    .friend-icon {
      margin: 0 5px;
    }

    .friend-username {
    }
  `;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.textContent);
  };

  return (
    <FriendContainer>
      <div className="friend-icon">
        <AccountCircleOutlinedIcon />
      </div>
      <div className="friend-username" onClick={onClick}>
        {username}
      </div>
    </FriendContainer>
  );
}

export default Friend;
