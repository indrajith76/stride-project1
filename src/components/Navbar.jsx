import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const NavbarData = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/dashboard", text: "Dashboard" },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavbarData.map((data, idx) => (
              <li key={idx}>
                <Link to={`${data.link}`}>{data.text}</Link>
              </li>
            ))}
            {!user ? (
              <li>
                <Link to="login">LogIn</Link>
              </li>
            ) : (
              <li>
                <button onClick={() => logOut()}>LogOut</button>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-blue-500">ZutaBazar</Link>
      </div>
      <div
        className={`${user ? "navbar-center" : "navbar-end"} hidden lg:flex`}
      >
        <ul className="menu menu-horizontal px-1">
          {NavbarData.map((data, idx) => (
            <li key={idx}>
              <Link to={`${data.link}`}>{data.text}</Link>
            </li>
          ))}
          {!user ? (
            <li>
              <Link to="login">LogIn</Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => logOut()}
                className="btn btn-sm bg-red-500 text-white"
              >
                LogOut
              </button>
            </li>
          )}
        </ul>
      </div>
      {user && (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
