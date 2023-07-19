import IsLoading from '@/components/IsLoading';
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
  const { data: bookData, isLoading, error } = useCheckoutBookQuery(id);

  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return (
      <IsLoading/>
    );
  }

  if (!bookData) {
    return (
      <IsLoading/>
    );
  }

  const {  title, genre, author, publication_date, image_url } =
    bookData.data as IBook;

  const checkoutHandler = async () => {
    console.log('checkout btn click...');
    reset();
  };

  return (
    <section className='flex flex-col lg:flex-row justify-around bg-sky-300   p-10 rounded-md'>
      <div className="">
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
        
        <p className='text-md text-center lg:text-left font-bold'>Author : {author}</p>
        <p className='text-md text-center lg:text-left font-bold'>Genre :{genre}</p>
        <p className='text-md text-center lg:text-left font-bold'>Publication Date: {publication_date}</p>
      </div>

      <div>
        <form
          className="flex justify-center "
          onSubmit={handleSubmit(checkoutHandler)}
        >
          <div className="flex flex-col w-96 mt-10 lg:mt-5 border-2 border-gray-600 p-5 rounded-lg">
            <p className="text-3xl  text-center ">
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
                className="input input-bordered  mt-2 w-full"
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
                className="input input-bordered    mt-2 w-full"
              />{' '}
              {errors.address && (
                <span className="text-red-700">Address is required</span>
              )}
            </label>

            <div className="w-full">
              <input
                type="submit"
                value="Buy Book"
                className="btn bg-green-500  border-0 m-2 w-full mx-auto"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
