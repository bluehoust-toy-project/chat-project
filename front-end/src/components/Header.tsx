import styled from '@emotion/styled';

import { InputBase } from '@mui/material';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;

    .search {
      display: flex;
      align-items: center;
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

  return (
    <Header>
      <div className="search">
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Friends" />
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
    </Header>
  );
}

export default Header;
