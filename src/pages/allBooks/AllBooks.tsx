import useTitle from '@/hooks/useTitle';
import { useGetBooksQuery } from '@/redux/api/apiSlice';
import BookCart from './BookCart';
import { IBook } from '@/types/booktypes';
import IsLoading from '@/components/IsLoading';
import { toast } from 'react-hot-toast';

const AllBooks = () => {
  useTitle('All Books');
  const { data, isLoading, isError, isSuccess } = useGetBooksQuery(undefined);

//   if(isLoading){
//     return (
//         <IsLoading></IsLoading>
//     )
//   }
//   if(isSuccess){
//     return (
//         toast.success("All book")
//     )
//   }
//   if(isError){
//     return (
//         toast.error("All Books load failed")
//     )
//   }
  return (
    <div>
      this is all books route
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
