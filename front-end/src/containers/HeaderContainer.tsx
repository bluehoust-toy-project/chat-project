import Header from '../components/Header';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { changeText } from '../modules/inputs';

function HeaderContainer() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <Header friends={user.friends} changeText={(value: string, name: string) => dispatch(changeText(value, name))} />
  );
}

export default HeaderContainer;
