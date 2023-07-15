import { useGetBooksQuery } from "@/redux/api/apiSlice";
import BookCart from "./BookCart";
import { IBook } from "@/types/booktypes";

const Books = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(error);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-[1200px] mx-auto">
      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((book: IBook) => (
          <BookCart key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
