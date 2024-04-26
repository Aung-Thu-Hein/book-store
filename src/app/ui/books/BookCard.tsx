import { Book } from "@/app/lib/definitions";
import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "./AddToCart";

type Props = {
  key: string;
  book: Book;
};

export const BookCard = (props: Props) => {
  const { key, book } = { ...props };

  return (
    <div className="px-2 py-3 bg-white mb-2 rounded-md md:mr-3 w-[250px]">
      <Link href={`/store/${book.id}`} key={key}>
        <div className="flex flex-col justify-center item-center">
          <div className="flex justify-center items-center mb-2 h-[50px]">
            <h3 className="text-sm font-medium text-center">{book.title}</h3>
          </div>
          <div className="mb-2 h-13 mx-auto">
            <Image
              className="rounded-md"
              src={book.cover}
              alt={book.title}
              width={150}
              height={100}
              priority={true}
              style={{ height: "200px", width: "auto" }}
            />
          </div>
          <div className="flex flex-col justify-center text-xs font-light mb-2">
            <div className="flex flex-row justify-around">
              {book.stock ? (
                <p className="flex items-center font-medium">
                  <span>
                    <ArchiveBoxIcon className="w-5 mr-1" />
                  </span>
                  {book.stock} in stock
                </p>
              ) : (
                <p className="flex items-center font-medium">
                  <span>
                    <ArchiveBoxXMarkIcon className="w-5 mr-1" />{" "}
                  </span>
                  {book.sellPrice} to buy
                </p>
              )}
              <div className="flex items-center font-medium">
                <CurrencyRupeeIcon className="w-5 mr-0.5" />
                <span className="text-xs"> {book.sellPrice} to buy</span>
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs">Rent for {book.rentPrice} INR per month</p>
              <p className="text-xs">
                {book.isRented
                  ? `Currently this book is rented by ${book?.renterIds?.length} customer`
                  : `Currently no one has rented this book`}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <AddToCart book={book} />
    </div>
  );
};
