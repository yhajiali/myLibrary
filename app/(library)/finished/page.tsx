import { books } from "@/lib/data";
import BookCard from "../../components/ui/BookCard";

const page = () => {
  return (
    <>
      {books
        .filter((book) => book.status === "finished")
        .map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
    </>
  );
};

export default page;
