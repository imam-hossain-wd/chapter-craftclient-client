import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase.config';
import { setUser } from '@/redux/feacture/user/userslice';
const Navbar = () => {

  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log('Logout');
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/all-books">All Books</Link>
      </li>
      <li>
        <Link to="/add-book">Add Book</Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
      <li>
        <Link to="/singin">Sing in</Link>
      </li>
      <li>
        <Link to="/singup">Sing up</Link>
      </li>
      <li> <p onClick={handleLogout} >
         Sing out</p></li>

    </React.Fragment>
  );
  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              <button>Sing out</button>
            </ul>
          </div>
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c039b824474525.56334ce736de9.jpg"
              className="w-16 h-16"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>

        </div>
      </div>
    </section>
  );
};

export default Navbar;
