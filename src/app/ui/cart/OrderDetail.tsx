"use client";

import { StoreContext } from "@/app/lib/context";
import { useContext } from "react";

export const OrderDetail = () => {
  const { cartData } = useContext(StoreContext);

  const booksToBuy = cartData.filter((cart) => {
    return cart.type === "BUY";
  });

  const priceToBuy = cartData.reduce(
    (accumulator, cart) => accumulator + cart.sellPrice,
    0
  );

  const booksToRent = cartData.filter((cart) => {
    return cart.type === "RENT";
  });

  const priceToRent = cartData.reduce(
    (accumulator, cart) => accumulator + cart.rentPrice,
    0
  );

  return (
    <div className="col-auto bg-white rounded-md p-4">
      <h2 className="font-medium text-lg mb-4">Order Detail</h2>
      <p className="mb-1">{`Buying ${booksToBuy.length} books for ${priceToBuy} INR`}</p>
      <p>{`Renting ${booksToRent.length} books for ${priceToRent} INR`}</p>
    </div>
  );
};
