import Link from "next/link";
import dynamic from "next/dynamic";
// const Navlink = dynamic (()=>import("./NavLink")); 

const NavLink = ({ href, title }) => {
  return (
    <ul>
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white">
        {title}
      </Link>
    </li>
    </ul>
  );
};

export default NavLink;
