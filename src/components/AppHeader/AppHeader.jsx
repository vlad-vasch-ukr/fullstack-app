import './AppHeader.scss';

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <span>List Manager</span>
      </div>
      <div className="add-header__search"></div>
      <div className="app-header__user"></div>
    </header>
  );
}
