import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { logIn } from 'redux/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        {/* Email */}
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
        {/* Password
        <input type="password" name="password" /> */}
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          required
        />
      </label>
      {/* <button type="submit">Log In</button> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" variant="outlined">
          Log In
        </Button>
      </div>
    </form>
  );
};
