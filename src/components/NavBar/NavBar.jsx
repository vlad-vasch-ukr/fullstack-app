import { NavLink } from 'react-router-dom';
import { NAVBAR_ITEMS } from './helpers';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul className="nav-bar__list">
          {NAVBAR_ITEMS.map(({ to, name, iconPath }) => {
            return (
              <li className="nav-bar__item" key={name}>
                <NavLink to={to}>
                  <img src={iconPath} />
                  <span>{name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
