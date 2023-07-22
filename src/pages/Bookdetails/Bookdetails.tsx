import useTitle from '@/hooks/useTitle';
import {
  usePostCommentMutation,
  useSingleBooksQuery,
} from '@/redux/api/apiSlice';
import { IBook } from '@/types/booktypes';
import { Link, useParams } from 'react-router-dom';
import Model from '@/components/model';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toast } from 'react-hot-toast';
import { addToBook } from '@/redux/feacture/cart/cartslice';
import '@/custom.d.ts';
import { Review } from '@/types/booktypes';

const Bookdetails = () => {
  const dispatch = useAppDispatch();

  useTitle('Book Details');
  const { id } = useParams();
  const { data, isLoading, error } = useSingleBooksQuery(id);
  const { user } = useAppSelector((state) => state.user);
  const [postComment] = usePostCommentMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Review>();


  if (error) {
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


 const { title, genre, author, publication_date, image_url } =
    data.data || {};

    const reviews: Review[] = data.data?.reviews || [];
 
  const addBooks = async (book: IBook) => {
    if (!user.email) {
      toast.error('Please log in');
    }
    if(user?.email){
      dispatch(addToBook(book));
    }
  };

  const commentHandler: SubmitHandler<Review> = (data) => {
    const comment = data.comment;
    const rating = data.rating;
    if (!user.email) {
      toast.error('Only Authenticated users can comment. Please log in');
    }
    if (user?.email) {
      postComment({ id, rating, comment });
      reset();
      toast.success('Comment successfully');
    }
  };
  return (
    <section>
      <div className="w-[95%] mx-auto ">
        <div className="flex flex-col lg:flex-row justify-around ">

          <div className='w-[45%]'>
            <img className='h-80 w-full rounded'
              src={image_url}
              alt=""
            /> <br/>
            <div>
            <p className="text-xl font-bold">{title}</p>
            <p className="text-md font-medium">Author : {author}</p>
            <p className="text-md font-medium">Genre :{genre}</p>
            <p className="text-md font-medium">Publication Date : {publication_date}</p>
            <p className="text-md font-medium">Price : $500</p> 
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between mt-5'>
              <button className='btn bg-indigo-600 text-white hover:text-black  border-0 rounded-full btn-sm mb-2 w-40'><Link to={`/edit-book/${id}`}> Edit</Link></button>
              <button className='btn bg-rose-600 text-white hover:text-black  border-0 rounded-full btn-sm mb-2 w-40'
              onClick={() => window.my_modal_5.showModal()}
              >delete</button>
              <button className='btn bg-green-500 text-white hover:text-black border-0 rounded-full btn-sm mb-2 w-40'
              onClick={() => addBooks(data?.data)}
              >Add to wishlist</button>
            </div>
          </div>
          
          <div className="h-500px w-[50%] ">
          <form
              className="flex flex-col w-96 mx-auto border-2 border-gray-700 px-10 py-5 mt-5 lg:mt-1 rounded "
              onSubmit={handleSubmit(commentHandler)}
            >
              <label htmlFor="">
                <p className='text-sm mb-1'>Comment</p>
                <textarea
                  placeholder="Comment"
                  {...register('comment', { required: true })}
                  className="textarea textarea-bordered textarea-lg w-full h-20 max-w-xs mb-1"
                ></textarea>
                {errors.comment && (
                  <span className="text-red-700">Comment is required</span>
                )}
              </label>
              <label className='w-48' htmlFor="">
                <p className='text-sm'>Rating</p>
                <select
                  className="select select-bordered mt-2 w-full select-sm mb-2"
                  {...register('rating', {
                    required: true,
                  })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                {errors.rating && (
                  <span className="text-red-700">Rating is required</span>
                )}
              </label>

              <input className="btn bg-indigo-600 w-80 text-white hover:text-black  border-0 " type="submit" />
            </form>

            <h1 className='text-lg mt-2 text-center text-rose-500'>Book Reviews</h1>
            <div className="mt-2 w-full">
              {reviews && reviews.map((review:Review, index:number) => (
                <div key={index} className='border-2 border-gray-400 p-5 rounded mb-2'>
                  <p>Comment: {review.comment}</p>
                  <p>Rating: {review.rating}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <Model />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookdetails;
