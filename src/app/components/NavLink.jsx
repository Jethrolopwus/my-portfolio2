// const { default: Link } = require("next/link")
import Link from "next/link";

const NavLink = ({href, title} ) => {
    return(
        <li><Link href={href}
         className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white ">
            {title}
            </Link></li>

    )
};
 export default NavLink;
