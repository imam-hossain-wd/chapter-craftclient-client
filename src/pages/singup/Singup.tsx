import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Singup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const singinHandler = (data) => {
        console.log(data);
      };

    return (
        <section className='flex justify-center'>
<div className='w-[450px] border-2 border-orange-400 p-10 mb-10 rounded-md'>
      <form onSubmit={handleSubmit(singinHandler)}>
        <div>
          <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
          <h3 className="text-center text-xl mt-2">
            Sing up into your account
          </h3>
        </div>
        <br />
        <div>
        <input
           {...register('name', {
            required: 'Email is name'
          })}
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full mb-4"
        />
        {errors.name && <span className='text-red-700'>{errors.name.message}</span>}
        </div>
        <div>
        <input
           {...register('email', {
            required: 'Email is required'
          })}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />
        {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
        </div>
   
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          type="password"
          placeholder="password"
          className="input input-bordered w-full mb-4"
        />{errors.password && <span className='text-red-700'>{errors?.password.message}</span>}
        <br />
        <input
          type="submit"
          className="w-full rounded-full btn btn-outline btn-primary"
          value="Sing Up"
        />
        <div className="flex  items-center m-4">
          <hr className="w-20 m-2 text-black" />
          <p className="ml-3 mr-3">or Sing in with</p>
          <hr className="w-20 m-2" />
        </div>
        <div className="w-full flex justify-center">
          <button className="btn btn-outline btn-secondary w-full rounded-full">
            {' '}
            <p className="mr-2">
              <FaGoogle />
            </p>{' '}
            Continue with google
          </button>
        </div>
        <p className="font-bold mt-3 text-center">
          Already have an account?
          <Link
            to="/singin"
            className="btn btn-link capitalize font-bold -ml-3"
          >
            Sing in
          </Link>{' '}
        </p>
      </form>
    </div>
    </section>
    );
};

export default Singup;;