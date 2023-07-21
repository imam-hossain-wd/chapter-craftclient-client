import useTitle from '@/hooks/useTitle';
import { useGetBooksQuery } from '@/redux/api/apiSlice';
import BookCart from './BookCart';
import { IBook } from '@/types/booktypes';
import IsLoading from '@/components/IsLoading';
import { useSelector } from 'react-redux';
import SearchFiltering from '../home/SearchFiltering';
import { RootState } from '@/redux/store';


const AllBooks = () => {
  const searchTerm = useSelector((state:RootState) => state.search.searchTerm);
  const genre = useSelector((state:RootState) => state.search.genre);
  const publicationYear = useSelector((state:RootState) => state.search.publicationYear);
  useTitle('All Books');

  const { data, isLoading } = useGetBooksQuery({searchTerm, publicationYear,genre});

  if(isLoading){
    return (
        <IsLoading></IsLoading>
    )
  }

  return (


    <div>
      <SearchFiltering />
      <div className="w-[1200px] mx-auto">
        <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.data?.map((book: IBook) => (
            <BookCart key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
