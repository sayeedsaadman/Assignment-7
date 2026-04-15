import { NavLink } from "react-router";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

const Navbar = ()=> {
  const navItems = [
    { path: "/", text: "Home", icon: <FaHome /> },
    { path: "/timeline", text: "Timeline", icon: <FaClock /> },
    { path: "/stats", text: "Stats", icon: <FaChartBar /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
  
        <span
          className="font-display font-bold text-xl text-gray-900 tracking-tight"
        >
          KeenKeeper
        </span>

        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <span className="text-xs">{item.icon}</span>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
