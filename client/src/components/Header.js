import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.auth);

  const renderHeaderOption = () => {
    switch (user) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">login with google</a>
          </li>
        );

      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderHeaderOption()}</ul>
      </div>
    </nav>
  );
};

export default Header;
