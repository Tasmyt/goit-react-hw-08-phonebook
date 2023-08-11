import { Button, Paragraph, Sending } from 'pages/pages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redax/auth/authOperation';
import { selectToken, selectUser } from 'redax/auth/authSelectors';
import { HiHome } from 'react-icons/hi';
import { BoxBar, UserBar } from './AppBar.styled';

export const AppBar = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <section>
      <nav>
        <BoxBar>
          <div>
            
            <Sending to="/"><HiHome />Home</Sending>
          </div>
          <div>
            {!token ? (
              <UserBar>
                <Sending to="/register">Registration</Sending>
                <Sending to="/login">Log in</Sending>
              </UserBar>
            ) : (
              <>
                <UserBar>
                  <Paragraph>Welcome {`${user.name}`}</Paragraph>
                  <Button type="button" onClick={onLogout}>
                    logOut
                  </Button>
                </UserBar>
              </>
            )}
          </div>
        </BoxBar>
      </nav>
    </section>
  );
};
