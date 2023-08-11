import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redax/auth/authOperation';
import { selectIsLogin } from '../../redax/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';
import { Button, Subtitle } from 'pages/pages.styled';
import { ButtonEye, Form, Input, Label } from 'pages/registration/Registration.styled';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const isLogin = useSelector(selectIsLogin);
  const [isPassword, setIsPassword] = useState(true);
  const [isView, setIsView] = useState(false);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    setValues(initialState);
  };
  if (isLogin) {
    return <Navigate to={'/contacts'} />;
  }

  const Eye = () => {
    setIsPassword(prev => !prev);
    setIsView(prev => !prev);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Subtitle>Log In</Subtitle>
        <div>
          <label>
            {' '}
            <HiMail />
            <Input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <Label>
            <HiLockClosed />
            <Input
              type={isPassword ? 'password' : 'text'}
              name="password"
              placeholder="password"
              onChange={handleChange}
              required
            />
            <ButtonEye type="button" onClick={Eye}>
              {isView ? <HiEye /> : <HiEyeOff />}
            </ButtonEye>
          </Label>
        </div>
        <Button type="submit">sign in</Button>
      </Form>
    </section>
  );
}
