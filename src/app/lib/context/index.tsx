import { createContext } from "react";
import { CartData } from "../definitions";

interface StoreContextType {
  cartData: CartData[];
  setCartData: React.Dispatch<React.SetStateAction<CartData[]>>;
}

export const StoreContext = createContext<StoreContextType>({
  cartData: [],
  setCartData: () => {},
});

