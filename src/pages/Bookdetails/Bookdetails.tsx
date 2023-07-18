import useTitle from '@/hooks/useTitle';
import {
  usePostCommentMutation,
  useSingleBooksQuery,
} from '@/redux/api/apiSlice';
import { IBook } from '@/types/booktypes';
import { Link, useParams } from 'react-router-dom';
import Model from '@/components/model';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/redux/hooks';
import { toast } from 'react-hot-toast';


const Bookdetails = () => {
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
  } = useForm();

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

  const { title, genre, author, publication_date, reviews } =
    data?.data as IBook;

  type Inputs = {
    comment: string;
    rating: number;
  };

  const addToBook = async (book: IBook) => {
    dispatchEvent(book());
  };

  const commentHandler: SubmitHandler<Inputs> = (data) => {
    const comment = data.comment;
    const rating = data.rating;
    if(!user.email){
      toast.error("Only Attenticated users can comment. please log in")
    }
    if(user?.email){
      postComment({ id, rating, comment });
      reset();
      toast.success("comment successfully")
    }
  };
  return (
    <section>
      this is book details
      <div className="w-[900px] h-[600px] mx-auto ">
        <div className="flex flex-col lg:flex-row justify-around ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
              className="w-[400px] h-96"
              alt=""
            />
          </div>
          <div className="h-500px w-[400px]">
            <p className="text-xl text-center font-bold">{title}</p>
            <p className="text-md font-bold">{author}</p>
            <p className="text-md font-bold">{genre}</p>
            <p className="text-md font-bold">{publication_date}</p>
            <p className="text-md font-bold">$500</p>
            <div className="mt-2 w-72 h-96">
              {reviews && reviews.map((review, index) => (
                <div key={index}>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              ))}
            </div>

            <form
              className="flex flex-col my-5"
              onSubmit={handleSubmit(commentHandler)}
            >
              <label htmlFor="">
                Comment <br />
                <textarea
                  placeholder="Comment"
                  {...register('comment', { required: true })}
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-2"
                ></textarea>
                {errors.comment && (
                  <span className="text-red-700">Comment is required</span>
                )}
              </label>
              <label htmlFor="">
                Rating <br />
                <select
                  className="select select-bordered mt-2 w-full"
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

              <input className="btn btn-sucess" type="submit" />
            </form>
            <div className="flex flex-col justify-center">
              <button className="btn bg-green-500 border-0 w-60 rounded-full btn-sm mb-2">
                <Link to={`/edit-book/${id}`}> Edit</Link>
              </button>
              <button
                className="btn bg-red-500 border-0 rounded-full btn-sm mb-2 w-60"
                onClick={() => window.my_modal_5.showModal()}
              >
                Delete Book
              </button>
              <button
                onClick={() => addToBook(data?.data)}
                className="btn bg-sky-500 border-0 rounded-full btn-sm mb-2 w-60"
              >
                Add WishList
              </button>

              <Model />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookdetails;
