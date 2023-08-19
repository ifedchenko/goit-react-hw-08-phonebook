import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <Button variant="contained">Register</Button>
      </NavLink>
      {/* <Button to="/register" variant="contained">
        Register
      </Button> */}
      <NavLink className={css.link} to="/login">
        <Button variant="contained">Log In</Button>
      </NavLink>
    </div>
  );
};
