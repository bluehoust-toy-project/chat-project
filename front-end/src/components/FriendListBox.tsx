/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../modules';
import { addFriend } from '../modules/userSlice';

import FriendBox from './FriendBox';

const FriendListBox = () => {
  const dispatch = useAppDispatch();
  const friends = useAppSelector((state) => state.user.friends);
  const [username, setUsername] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (username) {
      const newFriend = { username: username };
      dispatch(addFriend(newFriend));
      setUsername('');
      setOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

  return (
    <Grid style={{ backgroundColor: 'none' }} item xs={2}>
      <div>Friend List</div>
      {friends && friends.map((friend, idx) => <FriendBox key={idx} friend={friend} />)}
      <button css={buttonStyle} onClick={() => setOpen(true)}>
        <div>
          <PersonAddIcon />
        </div>
        <div>Add friends</div>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)}>
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
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={username}
          />
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={handleClick}>추가</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

const buttonStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`;

export default FriendListBox;
