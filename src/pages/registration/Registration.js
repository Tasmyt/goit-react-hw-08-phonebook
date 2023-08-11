import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redax/auth/authOperation';
import { HiMail, HiUser, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';
import { Button, Subtitle } from 'pages/pages.styled';
import { ButtonEye, Form, Input, Label,  } from './Registration.styled';

const initialState = {
  name: '',
  email: '',
  password: '',
};
export default function Registration() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [isPassword, setIsPassword] = useState(true);
  const [isView, setIsView] = useState(false);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    setValues(initialState);
  };

  const Eye = () => {
    setIsPassword(prev => !prev);
    setIsView(prev => !prev);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Subtitle>Sign Up</Subtitle>
        <div>
          <label>
            {' '}
            <HiUser />
            <Input
              type="text"
              name="name"
              placeholder="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            {' '}
            <HiMail />
            <Input
              type="text"
              name="email"
              placeholder="email"
              value={values.email}
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
              value={values.password}
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
