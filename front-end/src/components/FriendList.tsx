/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';

import { useSelector } from 'react-redux';
import { RootState } from '../modules';

import FriendContainer from '../containers/FriendContainer';

type FriendListProps = {
  friends: Array<{ username: string }>;
  addFriend: (friend: { username: string }) => void;
  changeText: (value: string, name: string) => void;
  changeBoolean: (value: boolean, name: string) => void;
};

function FriendList({ friends, addFriend, changeText, changeBoolean }: FriendListProps) {
  const usernameInput = useSelector((state: RootState) => state.inputs.friend_username);
  const dialogInput = useSelector((state: RootState) => state.inputs.friend_open_dialog);
  const friendListStyle = css`
    background-color: none;

    .add-friend {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;

      :focus {
        outline: none;
      }
    }
  `;

  const handleClick = () => {
    if (usernameInput.value) {
      const newFriend = { username: usernameInput.value };
      addFriend(newFriend);
      changeText('', usernameInput.name);
      changeBoolean(dialogInput.value, dialogInput.name);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Grid css={friendListStyle} item xs={2}>
      <div>Friend List</div>
      {friends && friends.map((friend, idx) => <FriendContainer key={idx} username={friend.username} />)}
      <button className="add-friend" onClick={() => changeBoolean(dialogInput.value, dialogInput.name)}>
        <div>
          <PersonAddIcon />
        </div>
        <div>Add friends</div>
      </button>
      <Dialog open={dialogInput.value} onClose={() => changeBoolean(dialogInput.value, dialogInput.name)}>
        <DialogTitle>Add Friends</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Username"
            type="text"
            fullWidth
            variant="standard"
            name="friend_username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeText(e.target.value, e.target.name);
            }}
            onKeyDown={handleKeyDown}
            value={usernameInput.value}
          />
          <DialogActions>
            <Button onClick={() => changeBoolean(dialogInput.value, dialogInput.name)}>취소</Button>
            <Button onClick={handleClick}>추가</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default FriendList;
