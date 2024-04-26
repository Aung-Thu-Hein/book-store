import Link from "next/link";
import { NavLink } from "./NavLink";
import { Logo } from "./Logo";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full px-3 py-2 md:px-2 md:w-[208px] md:fixed md:overflow-y-auto">
      <Link
        href="/store"
        className="mb-2 flex rounded-md bg-yellow-100 h-20 md:h-30 items-center p-4"
      >
        <div className="w-32 md:w-40 ">
          <Logo />
        </div>
      </Link>
      <div className="flex md:grow flex-wrap gap-2 md:flex-col md:gap-0">
        <NavLink />
        <form>
          <button className="flex w-full grow items-center justify-center md:justify-start gap-2 text-sm font-medium bg-white p-2 rounded-md hover:bg-yellow-100 hover:text-yellow-600">
            <ArrowLeftEndOnRectangleIcon className="w-6 text-yellow-600" />
            <p className="hidden md:block">Sign Out</p>
          </button>
        </form>
      </div>
    </div>
  );
};
