import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthinicated);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  }

  const navContent = <nav>
    <ul>
      <li>
        <a href='/'>My Products</a>
      </li>
      <li>
        <a href='/'>My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  </nav>;
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && navContent}
    </header>
  );
};

export default Header;
