import { useForm } from 'react-hook-form';
import { Link,  NavigateFunction, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useAppDispatch } from '@/redux/hooks';
import { createUser, signInWithGoogle } from '@/redux/feacture/user/userslice';
import useTitle from '@/hooks/useTitle';

interface SignupFormInputs {
  email: string;
  password: string;
}

const Singup = () => {
  useTitle('Singup');
  const {register,handleSubmit,formState: { errors },
  } = useForm<SignupFormInputs>();
  const navigate: NavigateFunction = useNavigate();



  const dispatch = useAppDispatch();

  const singUpHandler = (data: SignupFormInputs) => {
    const { email, password } = data;
    dispatch(createUser({ email, password }));
 navigate('/')
  };
  const handleGoogleLogin = () => {
    dispatch(signInWithGoogle());
 navigate('/')
  };

  return (
    <section className="flex justify-center">
      <div className="w-[450px] border-2 border-orange-400 p-10 mb-10 rounded-md">
        <form onSubmit={handleSubmit(singUpHandler)}>
          <div>
            <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
            <h3 className="text-center text-xl mt-2">
              Sing up into your account
            </h3>
          </div>
          <br />
          <div>
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-4"
            />
            {errors.email && (
              <span className="text-red-700">{errors.email.message}</span>
            )}
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
          />
          {errors.password && (
            <span className="text-red-700">{errors?.password.message}</span>
          )}
          <br />
          <input
            type="submit"
            className="w-full rounded-full btn btn-outline btn-primary"
            value="Sing Up"
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
            Already have an account?
            <Link
              to="/singin"
              className="btn btn-link capitalize font-bold -ml-3"
            >
              Sing in
            </Link>{' '}
          </p>
       
      </div>
    </section>
  );
};

export default Singup;
