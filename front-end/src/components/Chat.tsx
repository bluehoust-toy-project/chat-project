/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import classNames from 'classnames';

import { Grid } from '@mui/material';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

import FriendContainer from '../containers/FriendContainer';

type MessageProps = {
  fromMe: boolean;
  content: string;
};

function Message({ fromMe, content }: MessageProps) {
  return (
    <div className={classNames('wrap', { fromMe })}>
      <div className={classNames('message')}>{content}</div>
    </div>
  );
}

type ChatProps = {
  selectedFriend: { username: string };
  username: string;
  messages: Array<{
    from: string;
    to: string;
    content: string;
  }> | null;
  addMessage: (friend: { username: string }, message: { from: string; to: string; content: string }) => void;
  changeText: (value: string, name: string) => void;
};

function Chat({ selectedFriend, username, messages, addMessage, changeText }: ChatProps) {
  const chatStyle = css`
    background-color: white;
    height: 95vh;
    /* overflow-y: scroll; */

    .chat-section-user {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
      border-bottom: 1px solid black;
      box-sizing: border-box;

      .icon {
        svg {
          width: 40px;
          height: 40px;
        }
      }

      .username {
        font-size: 2rem;
        line-height: 40px;
      }
    }

    .chat-section-contents {
      height: 65vh;
      overflow-y: scroll;

      .wrap {
        display: flex;
        padding: 10px 10px;

        .message {
          display: inline-block;
          margin: 5px 0;
          padding: 5px 10px;
          border: 3px solid lightgray;
          border-radius: 15px;
          max-width: 500px;
          white-space: pre;
        }
      }

      .fromMe {
        flex-direction: row-reverse;
      }
    }

    .chat-section-inputs {
      height: 20vh;
      display: flex;

      textarea {
        width: 80%;
      }

      button {
        width: 20%;
      }
    }
  `;
  const messageInput = useSelector((state: RootState) => state.inputs.chat_message);

  const handleClick = () => {
    if (messageInput) {
      const newMessage = {
        from: username,
        to: selectedFriend.username,
        content: messageInput.value,
      };
      addMessage(selectedFriend, newMessage);
      changeText('', messageInput.name);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Grid css={chatStyle} item xs={10}>
      <>
        <div className="chat-section-user">
          {selectedFriend.username && <FriendContainer username={selectedFriend.username} />}
        </div>
        <div className="chat-section-contents">
          <>
            {messages &&
              messages.map((messageInfo, idx) => (
                <Message key={idx} fromMe={messageInfo.from === username} content={messageInfo.content} />
              ))}
            {selectedFriend.username && !messages?.length && <div>메시지 기록이 없습니다.</div>}
          </>
        </div>
        <div className="chat-section-inputs">
          <textarea
            className="message-input"
            value={messageInput.value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeText(e.target.value, messageInput.name)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>보내기</button>
        </div>
      </>
    </Grid>
  );
}

export default Chat;
