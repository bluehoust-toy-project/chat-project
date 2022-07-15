import React, { useState } from 'react';

import styled from '@emotion/styled';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';

import FriendContainer from '../containers/FriendContainer';

type FriendListProps = {
  friends: Array<{ username: string }>;
  clickAddFriend: (friend: { username: string }) => void;
};

function FriendList({ friends, clickAddFriend }: FriendListProps) {
  const [open, setOpen] = useState(false);
  const [newFriend, setNewFriend] = useState({ username: '' });
  const FriendGridContainer = styled(Grid)`
    background-color: none;

    .add-friend {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
    }
  `;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFriend((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  const addFriend = (newFriend: { username: string }) => {
    const idx = friends.findIndex((friend) => friend.username === newFriend.username);
    if (idx < 0) {
      clickAddFriend(newFriend);
    }
  };

  const clickAdd = () => {
    addFriend(newFriend);
    closeDialog();
  };

  const closeDialog = () => {
    setNewFriend({ username: '' });
    setOpen(false);
  };

  return (
    <FriendGridContainer item xs={2}>
      <div>Friend List</div>
      {friends && friends.map((friend, idx) => <FriendContainer key={idx} username={friend.username} />)}
      <button className="add-friend" onClick={() => setOpen(true)}>
        <div>
          <PersonAddIcon />
        </div>
        <div>Add friends</div>
      </button>
      <Dialog open={open} onClose={closeDialog}>
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
            onChange={onChange}
            value={newFriend.username}
          />
          <DialogActions>
            <Button onClick={closeDialog}>취소</Button>
            <Button onClick={clickAdd}>추가</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </FriendGridContainer>
  );
}

export default FriendList;
