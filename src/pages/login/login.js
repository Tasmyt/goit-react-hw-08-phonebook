import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redax/auth/authOperation';
import { selectIsLogin } from '../../redax/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const isLogin = useSelector(selectIsLogin);

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
  }
if (isLogin) {
    return <Navigate to={'/contacts'} />;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          email
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          password
          <input
            type="tel"
            name="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
