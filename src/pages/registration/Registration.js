import { useDispatch } from "react-redux";
import { useState } from 'react';
import { register } from "redax/auth/authOperation";


const initialState = {    
  name: "",
  email: "",
  password: "",
}
export default function Registration() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
       dispatch(register({ name: values.name, email: values.email, password: values.password }));
    
    };

return (
  <section>
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        name
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        {' '}
        email
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
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
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">sign in</button>
    </form>
  </section>
);
};
