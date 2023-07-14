import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Singin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const singinHandler = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-2/5 mx-auto border-4 border-yellow-500 p-5 rounded">
      <form onSubmit={handleSubmit(singinHandler)}>
        <div>
          <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
          <h3 className="text-center text-xl mt-2">
            Sing in into your account
          </h3>
        </div>
        <br />
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />{' '}
        <br />
        <input
          {...register('password')}
          type="password"
          placeholder="password"
          className="input input-bordered w-full mb-4"
        />{' '}
        <br />
        <p className="font-bold mb-2">
          <Link to="/">Forget password ?</Link>{' '}
        </p>
        <input
          type="submit"
          className="w-full rounded-full btn btn-outline btn-primary"
          value="Sing in"
        />
        <div className="flex  items-center m-4">
          <hr className="w-28 m-2 text-black" />
          <p className="ml-3 mr-3">or Sing in with</p>
          <hr className="w-28 m-2" />
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
          New to Book house ?
          <Link
            to="/singup"
            className="btn btn-link capitalize font-bold -ml-3"
          >
            Sing up
          </Link>{' '}
        </p>
      </form>
    </div>
  );
};

export default Singin;
