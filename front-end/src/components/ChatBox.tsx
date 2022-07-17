/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Grid } from '@mui/material';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../modules';
import { addMessage } from '../modules/userSlice';
import FriendBox from './FriendBox';

import MessageBox from './MessageBox';

const ChatBox = () => {
  const dispatch = useDispatch();
  const selectedFriend = useAppSelector((state) => state.user.selectedFriend);
  const user = useSelector((state: RootState) => state.user);
  const [message, setMessage] = useState('');

  const triggerSendButton = () => {
    if (message) {
      const newMessage = {
        from: user.username,
        to: selectedFriend.username,
        content: message,
      };
      dispatch(addMessage({ friend: selectedFriend, message: newMessage }));
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      triggerSendButton();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  return (
    <Grid style={{ backgroundColor: 'white', height: '95vh' }} item xs={10}>
      <>
        <div css={chatUserStyle}>{selectedFriend.username && <FriendBox friend={selectedFriend} />}</div>
        <div css={chatContentStyle}>
          <>
            {user.messages[selectedFriend.username] &&
              user.messages[selectedFriend.username].map((messageInfo, idx) => (
                <MessageBox key={idx} fromMe={messageInfo.from === user.username} content={messageInfo.content} />
              ))}
          </>
        </div>
        <div css={chatInputStyle}>
          <textarea className="message-input" value={message} onChange={handleChange} onKeyDown={handleKeyDown} />
          <button onClick={triggerSendButton}>Send</button>
        </div>
      </>
    </Grid>
  );
};

const chatUserStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border-bottom: 1px solid black;
  box-sizing: border-box;

  svg {
    width: 40px;
    height: 40px;
  }

  div {
    font-size: 2rem;
    line-height: 40px;
  }
`;

const chatContentStyle = css`
  height: 65vh;
  overflow-y: scroll;
`;

const chatInputStyle = css`
  height: 20vh;
  display: flex;

  textarea {
    width: 80%;
  }

  button {
    width: 20%;
  }
`;

export default ChatBox;
