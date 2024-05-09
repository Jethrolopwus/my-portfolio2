import Link from "next/link";
import dynamic from "next/dynamic";

const NavLink = ({ title }) => {
  return (
    <div className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white">
    {title}
    </div>
  );
};

export default NavLink;
