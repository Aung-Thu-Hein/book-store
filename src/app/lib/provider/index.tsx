"use client";

import { useState } from "react";
import { StoreContext } from "../context";
import { CartData } from "../definitions";

type Props = {
  children: React.ReactNode;
};

export default function StoreProvider(props: Props) {
  const [cartData, setCartData] = useState<CartData[]>([]);

  return (
    <StoreContext.Provider value={{cartData, setCartData }}>
      {props.children}
    </StoreContext.Provider>
  );
}
