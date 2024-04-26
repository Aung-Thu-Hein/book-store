import { getAllBooks } from "../lib/fake-data";
import { BookList } from "../ui/books/BookList";

export default function Store() {

  const books = getAllBooks();

  return <BookList books={books} />;
}
