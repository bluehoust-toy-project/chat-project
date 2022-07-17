/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { InputBase } from '@mui/material';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const Header = () => {
  const friends = useSelector((state: RootState) => state.user.friends);
  const [username, setUsername] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

  return (
    <header css={headerStyle}>
      <div css={searchStyle}>
        <div>
          <InputBase
            type="text"
            placeholder="Search Friends"
            name="header_username"
            onChange={handleChange}
            value={username}
          />
          <ul>
            {username &&
              friends.map((friend, idx) =>
                friend.username.startsWith(username) ? <li key={idx}>{friend.username}</li> : null
              )}
          </ul>
        </div>
        <button>
          <SearchIcon />
        </button>
      </div>
      <div css={optionsStyle}>
        <button>
          <HelpOutlineOutlinedIcon />
        </button>
        <button>
          <AccountCircleOutlinedIcon />
        </button>
      </div>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const searchStyle = css`
  display: flex;
  align-items: center;

  input {
    width: 250px;
  }

  ul {
    width: 250px;
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 10px 10px;
      background-color: lightgray;
      opacity: 0.5;
    }

    li:nth-of-type(even) {
      background-color: gray;
    }
  }
`;

const optionsStyle = css`
  position: absolute;
  right: 20px;
`;

export default Header;
