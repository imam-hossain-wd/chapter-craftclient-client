import { useGetBooksQuery } from '@/redux/api/apiSlice';
import BookCart from './BookCart';

const Home = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log('home....', data?.data[0]);
  console.log('home....', error);
  console.log('home....', isLoading);

  if (isLoading) {
    <div className="flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>;
  }
  return (
    <div>
    
      this is home js
      {
        <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.map((book) => (
            <BookCart key={book.id} book={book}>

            </BookCart>
          ))}
        </div>
      }
    </div>
  );
};

export default Home;
