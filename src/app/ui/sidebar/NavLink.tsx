'use client'

import { StoreContext } from "@/app/lib/context";
import {
  BookOpenIcon,
  CogIcon,
  CubeTransparentIcon,
  HomeIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useContext } from "react";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/communities", icon: UserGroupIcon },
  { name: "Settings", href: "/store/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

export const NavLink = () => {
  const { cartData } = useContext(StoreContext);

  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex grow items-center justify-center bg-white p-2 rounded-md md:mb-2 text-sm font-medium md:justify-start md:flex-none hover:bg-yellow-100 hover:text-yellow-600"
          >
            <IconComponent className="w-6 text-yellow-600" />
            <p className="hidden md:block md:ml-2">
              {link.name === "Cart" && cartData && cartData.length > 0
                ? `${link.name}(${cartData.length})`
                : `${link.name}`}
            </p>
          </Link>
        );
      })}
    </>
  );
};
