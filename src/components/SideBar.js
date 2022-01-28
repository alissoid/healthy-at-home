import {
  AiOutlineEye,
  AiOutlineClockCircle,
  AiOutlineHome,
} from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
      <Link to="/">
        <SideBarIcon icon={<AiOutlineHome size="28" />} text="Home" />
      </Link>
      <Divider />
      <Link to="/news">
        <SideBarIcon icon={<BiNews size="28" />} text="News" />
      </Link>
      <Link to="/timer">
        <SideBarIcon icon={<AiOutlineClockCircle size="28" />} text="Timer" />
      </Link>
      <Link to="/eye">
        <SideBarIcon icon={<AiOutlineEye size="29" />} text="Eye Health" />
      </Link>
      <Divider />
      <Link to="/settings">
        <SideBarIcon icon={<BsFillGearFill size="22" />} text="Settings" />
      </Link>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export const HamburgerMenu = () => {
  return (
    <div
      className="group hover:rounded-xl rounded-3xl
    transition-all duration-300 ease-linear hover:bg-green-600 hover:text-gray-800
    cursor-pointer shadow-lg bg-gray-800 fixed bottom-4 left-4 hamburger w-16 h-16 hover:w-[21rem]"
    >
      <GiHamburgerMenu
        className="
    h-12 w-12 mt-2 mb-2 relative left-2 text-green-500 transition-all duration-300 ease-linear group-hover:text-gray-800"
        size="40"
      />
      <HoverSideBar className="group-hover:flex"/>
    </div>
  );
};

const HoverSideBar = () => {
  return (
    <div className="hamhover fixed bottom-4 left-[5.5rem] h-16 flex flex-row gap-1">
      <Link to="/">
        <SideBarIcon icon={<AiOutlineHome size="28" />} text="Home" />
      </Link>
      <Link to="/news">
        <SideBarIcon icon={<BiNews size="28" />} text="News" />
      </Link>
      <Link to="/timer">
        <SideBarIcon icon={<AiOutlineClockCircle size="28" />} text="Timer" />
      </Link>
      <Link to="/eye">
        <SideBarIcon icon={<AiOutlineEye size="29" />} text="Eye Health" />
      </Link>
      <Link to="/settings">
        <SideBarIcon icon={<BsFillGearFill size="22" />} text="Settings" />
      </Link>
    </div>
  );
};

export default SideBar;
