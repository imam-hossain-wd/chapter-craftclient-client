import useTitle from '@/hooks/useTitle';
import { useGetBooksQuery } from '@/redux/api/apiSlice';
import { IBook } from '@/types/booktypes';
import { Link,  useParams } from 'react-router-dom';
import Model from '@/components/model';
const Bookdetails = () => {

  useTitle('Book Details');
const {id} = useParams()
  const { data, isLoading, error } = useGetBooksQuery(id);

  if(error){
    console.log(error);
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { _id,title, genre, author, publication_date } = data as IBook;
  console.log('Book details:', _id);

  return (
    <div>
      this is book details
      <div className="card w-80 h-[450px] shadow-xl bg-gray-900 text-white">
        <figure className="px-10 pt-10">
          <img
            src="https://eloquentjavascript.net/img/cover.jpg"
            alt="Shoes"
            className="rounded-lg w-60 h-48"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-white">{title}</h2>
          <h2 className="text-sm">{author}</h2>
          <h2 className="text-sm">{genre}</h2>
          <h2 className="text-sm">{publication_date}</h2>
        </div>
        <div>
        <button className="btn bg-red-400 border-0 rounded-full btn-sm "><Link to={`/edit-book/${id}`}> Edit</Link></button>
      <button className="btn bg-red-400 border-0 rounded-full btn-sm" onClick={()=>window.my_modal_5.showModal()}>Delete Book</button>
      <Model />
        </div>

      </div>
    </div>
  );
};

export default Bookdetails;
