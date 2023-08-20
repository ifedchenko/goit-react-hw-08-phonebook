import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { register } from 'redux/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    if (evt.currentTarget) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        {/* <input type="text" name="name" /> */}
        <TextField
          required
          id="Username"
          label="Username"
          variant="outlined"
          type="text"
          name="name"
        />
      </label>
      <label className={css.label}>
        {/* <input type="email" name="email" /> */}
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          required
        />
      </label>
      <label className={css.label}>
        {/* <input type="password" name="password" /> */}
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          required
        />
      </label>
      {/* <button type="submit">Register</button> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </div>
    </form>
  );
};
