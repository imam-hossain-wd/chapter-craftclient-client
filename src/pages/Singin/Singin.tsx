import { useForm } from 'react-hook-form';
import { Link, Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { signInWithGoogle, singinUser } from '@/redux/feacture/user/userslice';
import { useEffect } from 'react';
import useTitle from '@/hooks/useTitle';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Singin = () => {
  useTitle('SingIn');
  const { register, handleSubmit, formState: { errors }} = useForm<LoginFormInputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const dispatch = useAppDispatch();


  const singinHandler = (data:LoginFormInputs) => {
    const {email, password} = data;
    dispatch(singinUser({ email,password }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate('/');
    }
  };

  const handleGoogleLogin = () => {
    dispatch(signInWithGoogle());
    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate('/');
    }

  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email, isLoading]);

  return (
    <section className='flex justify-center'>
<div className='w-[450px] border-2 border-orange-400 p-10 mb-10 rounded-md'>
      <form onSubmit={handleSubmit(singinHandler)}>
        <div>
          <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
          <h3 className="text-center text-xl mt-2">
            Sing in into your account
          </h3>
        </div>
        <br />
        <input
           {...register('email', {
            required: 'Email is required'
          })}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />
        {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
        <br />
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
        />{errors.password && <span className='text-red-700 mb-2'>{errors?.password.message}</span>}
        <br />
        <input
          type="submit"
          className="w-full rounded-full btn btn-outline btn-primary"
          value="Sing in"
        />
        </form>
         <div className="flex  items-center m-4">
          <hr className="w-20 m-2 text-black" />
          <p className="ml-3 mr-3">or Sing in with</p>
          <hr className="w-20 m-2" />
        </div>
        <div className="w-full flex justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full rounded-full">
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

    </div>
    </section>
    
  );
};

export default Singin;
