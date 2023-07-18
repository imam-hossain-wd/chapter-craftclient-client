import useTitle from '@/hooks/useTitle';
import { useGetBooksQuery } from '@/redux/api/apiSlice';
import BookCart from './BookCart';
import { IBook } from '@/types/booktypes';
import IsLoading from '@/components/IsLoading';
import { useSelector } from 'react-redux';
import SearchFiltering from '../home/SearchFiltering';


const AllBooks = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  useTitle('All Books');

  console.log(searchTerm,'search term is');
  const { data, isLoading } = useGetBooksQuery(searchTerm);

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
