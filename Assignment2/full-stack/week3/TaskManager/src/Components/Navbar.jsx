import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const Links = [
    { path: "/home", title: "Home" },
    { path: "/dashboard", title: "Dashboard" },
    { path: "/tasks", title: "Task" }
  ]
  const activestyle = { textDecoration: "none", color: "red" };
  const inActivestyle = { textDecoration: "none", color: "black" };
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "blue",
      padding: "20px 10px",
      margin: "20px"

    }}>

      {Links.map(({ path, title }) => (
        <NavLink
          to={path}
          style={({ isActive }) => {
            return isActive ? activestyle : inActivestyle;
          }}
        >
          
          {title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;