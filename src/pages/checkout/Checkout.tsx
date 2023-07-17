import useTitle from '@/hooks/useTitle';
import { useCheckoutBookQuery } from '@/redux/api/apiSlice';
import { IBook } from '@/types/booktypes';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Checkout = () => {
  useTitle('Checkout');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  console.log('use params id', id);
  const { data: bookData, isLoading, error } = useCheckoutBookQuery(id);

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

  if (!bookData) {
    return <div>Loading...</div>;
  }

  console.log(`data`, bookData.data);
  const { _id, title, genre, author, publication_date, image_url } =
    bookData.data as IBook;

  const checkoutHandler = async () => {
    console.log('checkout btn click...');
  };

  return (
    <section className='flex justify-around bg-sky-300 p-10 rounded-md'>
      <div className="bg-red-400">
        {' '}
        <br />
        <p className='text-3xl font-bold text-center '>{title}</p>
        <div className="mt-5">
          <img
            src={image_url}
            alt=""
            className="w-96 h-60 mx-auto rounded-lg"
          />
        </div>
		<br />
        
        <p className='text-md font-bold'>Author : {author}</p>
        <p className='text-md font-bold'>Genre :{genre}</p>
        <p className='text-md font-bold'>Publication Date: {publication_date}</p>
      </div>

      <div>
        <form
          className="flex justify-center "
          onSubmit={handleSubmit(checkoutHandler)}
        >
          <div className="flex flex-col w-80 ">
            <p className="text-3xl fond-bold text-center text-orange-500">
              Checkout Form
            </p>
            <label htmlFor="">
              Full Name <br />
              <input
                {...register('full_name', {
                  required: true,
                })}
                type="text"
                placeholder="Full Name"
                className="input input-bordered mt-2 w-full"
              />{' '}
              {errors.full_name && (
                <span className="text-red-700">Full Name is required</span>
              )}
            </label>

            <label htmlFor="">
              Email <br />
              <input
                {...register('email', {
                  required: true,
                })}
                type="email"
                placeholder="Enter you email"
                className="input input-bordered  mt-2 w-full"
              />{' '}
              {errors.email&& (
                <span className="text-red-700">Email is required</span>
              )}
            </label>
            <label htmlFor="">
              Phone Number <br />
              <input
                {...register('number', {
                  required: true,
                })}
                type="number"
                placeholder="Enter your number"
                className="input input-bordered  mt-2 w-full"
              />{' '}
              {errors.number && (
                <span className="text-red-700">Number is required</span>
              )}
            </label>

            <label htmlFor="">
              Address <br />
              <input
                {...register('address', {
                  required: true,
                })}
                type="text"
                placeholder="Enter your address"
                className="input input-bordered  mt-2 w-full"
              />{' '}
              {errors.address && (
                <span className="text-red-700">Address is required</span>
              )}
            </label>

            <div className="w-full">
              <input
                type="submit"
                value="Buy Book"
                className="btn btn-success m-2 w-full mx-auto"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
