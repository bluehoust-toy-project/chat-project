/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { InputBase } from '@mui/material';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type HeaderProps = {
  friends: Array<{ username: string }>;
  changeText: (value: string, name: string) => void;
};

function Header({ friends, changeText }: HeaderProps) {
  const headerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;

    .search {
      display: flex;
      align-items: center;

      .search-wrap {
        div {
          width: 250px;
        }

        ul {
          width: 250px;
        }
      }

      .search-result {
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
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    .options {
      position: absolute;
      right: 20px;
    }
  `;
  const usernameInput = useSelector((state: RootState) => state.inputs.header_username);

  return (
    <header css={headerStyle}>
      <div className="search">
        <div className="search-wrap">
          <InputBase
            type="text"
            placeholder="Search Friends"
            name="header_username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeText(e.target.value, e.target.name);
            }}
            value={usernameInput.value}
          />

          <ul className="search-result">
            {usernameInput.value &&
              friends.map((friend, idx) =>
                friend.username.startsWith(usernameInput.value) ? <li key={idx}>{friend.username}</li> : null
              )}
          </ul>
        </div>
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="options">
        <button>
          <HelpOutlineOutlinedIcon />
        </button>
        <button>
          <AccountCircleOutlinedIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
