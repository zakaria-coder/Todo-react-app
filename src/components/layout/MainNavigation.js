import { Link } from "react-router-dom";

import "./MainNavigation.css";

function NavigationBar() {
  return (
    <header>
      <nav>
      <div className="navbar-title"><Link to="/">React meetups</Link></div>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/NewMeetUp">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
