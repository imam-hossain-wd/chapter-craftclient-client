import { useGetBooksQuery } from '@/redux/api/apiSlice';
import BookCart from './BookCart';
import { IBook } from '@/types/booktypes';
import IsLoading from '@/components/IsLoading';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

const Books = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const genre = useSelector((state: RootState) => state.search.genre);
  const publicationYear = useSelector((state: RootState) => state.search.publicationYear.toString()); 
  const { data, isLoading } = useGetBooksQuery({
    searchTerm,
    genre,
    publicationYear 
  });
  

  if (isLoading) {
    return <IsLoading />;
  }


  return (
    <div className="w-[1200px] mx-auto">
      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
        {data?.data?.slice(0, 10).map((book: IBook) => (
          <BookCart key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
