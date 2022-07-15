import styled from '@emotion/styled';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Grid } from '@mui/material';

import Friend from './Friend';

// type FriendProps = {
//     username: string,
// };

// function Friend({ username }: FriendProps) {
//     return (
//         <div className='friend'>
//             <div className='friend-icon'><AccountCircleOutlinedIcon /></div>
//             <div className='friend-username'>{username}</div>
//         </div>
//     );
// }

type FriendListProps = {
  friends: Array<{ username: string }>;
};

function FriendList({ friends }: FriendListProps) {
  const FriendContainer = styled(Grid)`
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

  return (
    <FriendContainer item xs={2}>
      <div>Friend List</div>
      {friends && friends.map((friend, idx) => <Friend key={idx} username={friend.username} />)}
      <button className="add-friend">
        <div>
          <PersonAddIcon />
        </div>
        <div>Add friends</div>
      </button>
    </FriendContainer>
  );
}

export default FriendList;
