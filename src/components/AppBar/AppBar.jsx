import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './AppBar.module.css';

import { AppBar, Toolbar } from '@mui/material';

export const AppBarX = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar>
      {/* <Toolbar> */}
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      {/* </Toolbar> */}
    </AppBar>
  );
};
