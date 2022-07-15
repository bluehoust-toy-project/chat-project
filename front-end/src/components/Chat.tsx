import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import classNames from 'classnames';
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
  selectedUser: { username: string | null } | null;
  username: string;
  messages: Array<{
    from: string;
    to: string;
    content: string;
  }> | null;
};

function Chat({ selectedUser, username, messages }: ChatProps) {
  const ChatContainer = styled(Grid)`
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

  return (
    <ChatContainer item xs={10}>
      <>
        <div className="chat-section-user">
          {selectedUser && selectedUser.username && <FriendContainer username={selectedUser.username} />}
        </div>
        <div className="chat-section-contents">
          <>
            {selectedUser &&
              messages &&
              messages.map((messageInfo, idx) => (
                <Message key={idx} fromMe={messageInfo.from === username} content={messageInfo.content} />
              ))}
            {selectedUser && selectedUser.username && !messages?.length && <div>메시지 기록이 없습니다.</div>}
          </>
        </div>
        <div className="chat-section-inputs">
          <textarea className="message-input" />
          <button>보내기</button>
        </div>
      </>
    </ChatContainer>
  );
}

export default Chat;
