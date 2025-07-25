import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-nav">
          <button>
            <Link to={"/"} className="nav-link">
              Main Menu
            </Link>
          </button>
          <button>
            <Link to={"/notes/profile"} className="nav-link">
              Profile
            </Link>
          </button>
          <button>
            <Link to={"/notes"} className="nav-link">
              Notes Home
            </Link>
          </button>
          <button>
            <Link to={"/notes/contactUs"} className="nav-link">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
