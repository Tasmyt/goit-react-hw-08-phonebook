import { Paragraph, Sending, Subtitle, Title } from 'pages/pages.styled';
import { useSelector } from 'react-redux';
import { selectToken } from 'redax/auth/authSelectors';
import { BoxHome } from './Home.styled';


export default function Home() {
  const token = useSelector(selectToken);
  return (
    <section>
      {token ? (<>
        <BoxHome>
        <Paragraph>Open your contacts </Paragraph>
          <Sending to="/contacts">PhoneBook</Sending>
          </BoxHome>
        </> 
      ) : (
          <>
            <BoxHome>
          <Title>Welcome to you PhoneBook</Title>
              <Subtitle>Please register or login to your account to use PhoneBook</Subtitle>
              </BoxHome>
        </>
      )}
    </section>
  );
}
