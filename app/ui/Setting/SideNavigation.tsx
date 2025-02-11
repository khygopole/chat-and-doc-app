import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { VscSymbolColor } from "react-icons/vsc";

export default function SideNavigation() {
  return (
    <aside className="bg-[#8484FE] w-[10%] h-screen text-black min-w-max">
      <Image src={logo} alt="ChatnDoc" className="place-self-center m-2" />
      <nav>
        <ul className="w-full">
          <li className="hover:bg-[#43438d] hover:text-white p-1 my-1 flex">
            {/*Replace href with previously accessed page*/}
            <Link href={"/fullChat"} className="w-full">
              <IoMdArrowBack size={25} className="inline-block ml-1" />
              Settings
            </Link>
          </li>
          <li className="hover:bg-[#43438d] hover:text-white p-1 my-1 flex">
            <Link href={"/setting/profile"} className="w-full">
              <CgProfile size={25} className="inline-block ml-1" /> Profile
            </Link>
          </li>
          <li className="hover:bg-[#43438d] hover:text-white p-1 my-1 flex">
            <Link href={"/setting/themes"} className="w-full">
              <VscSymbolColor size={25} className="inline-block ml-1" /> Theme
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
