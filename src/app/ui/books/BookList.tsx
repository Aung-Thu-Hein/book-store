import { Book } from "@/app/lib/definitions";
import { BookCard } from "./BookCard";

type Props = {
  books: Book[];
};

export const BookList = (props: Props) => {
  const { books } = { ...props };

  return (
    <div className="flex flex-wrap md:justify-start justify-center">
      {books.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
