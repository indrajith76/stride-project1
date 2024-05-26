import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logOut } = useAuth();

  const sidebarData = [
    { link: "/", text: "Home" },
    { link: "/dashboard", text: "Dashboard" },
    { link: "/dashboard/allProducts", text: "All Products" },
    { link: "/dashboard/addProduct", text: "Add Product" },
  ];
  return (
    <>
      {/* Navbar */}
      <div className="w-full navbar bg-base-300">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link to="/" className="btn btn-ghost text-xl">
            ZutaBazar
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <button
            onClick={() => logOut()}
            className="btn btn-sm text-white btn-error"
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col px-10">
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {sidebarData.map((data, idx) => (
              <li key={idx}>
                <Link to={`${data.link}`}>{data.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
