import { useGetLimitedBooksQuery } from '@/redux/api/apiSlice';
import BookCart from './BookCart';
import { IBook } from '@/types/booktypes';
import IsLoading from '@/components/IsLoading';
import { useSelector } from 'react-redux';

const Books = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const genre = useSelector((state) => state.search.genre);
  const { data, isLoading, error } = useGetLimitedBooksQuery({
    searchTerm,
    genre,
  });
  console.log(error);

  if (isLoading) {
    return <IsLoading />;
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
