/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import classNames from 'classnames';

interface MessageProps {
  fromMe: boolean;
  content: string;
}

const Message = ({ fromMe, content }: MessageProps) => {
  return (
    <div css={messageStyle}>
      <div className={classNames('wrap', { fromMe })}>
        <div>{content}</div>
      </div>
    </div>
  );
};

const messageStyle = css`
  .wrap {
    display: flex;
    padding: 10px 10px;

    div {
      display: inline-block;
      margin: 5px 0;
      padding: 5px 10px;
      border: 3px solid lightgray;
      border-radius: 15px;
      max-width: 500px;
      white-space: pre-line;
    }
  }

  .fromMe {
    flex-direction: row-reverse;
  }
`;

export default Message;
