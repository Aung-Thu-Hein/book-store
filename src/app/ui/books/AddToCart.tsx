"use client";

import { StoreContext } from "@/app/lib/context";
import { Book, CartData } from "@/app/lib/definitions";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { toast } from "react-toastify";

type Props = {
  book: Book;
};

export const AddToCart = (props: Props) => {
  const { book } = { ...props };
  const { cartData, setCartData } = useContext(StoreContext);

  const handleCart = (
    e: React.MouseEvent<HTMLElement>,
    type: "BUY" | "RENT"
  ) => {
    e.preventDefault();

    const newCartData: CartData = { ...book, type: type };
    setCartData([...cartData, newCartData]);
 
    toast.success(`Added ${book.title} to the cart`, {
      autoClose: 1500,
      position: "bottom-right",
    });
  };

  return (
    <div className="flex justify-evenly flex-grow-4 text-xs">
      <button
        className="flex items-center bg-yellow-600 p-2 rounded-sm hover:bg-yellow-400"
        onClick={(e) => handleCart(e, "BUY")}
      >
        <span>
          <ShoppingCartIcon className="w-5" />
        </span>
        To Buy
      </button>
      <button
        className="flex items-center bg-yellow-600 p-2 rounded-sm hover:bg-yellow-400"
        onClick={(e) => handleCart(e, "RENT")}
      >
        <span>
          <ShoppingCartIcon className="w-5" />
        </span>
        To Rent
      </button>
    </div>
  );
};
