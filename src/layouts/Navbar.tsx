import React from 'react';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/all-books">All Books</Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
      <li>
        <Link to="/singin">Sing in</Link>
      </li>
      <li>
        <Link to="/singout">Sing up</Link>
      </li>
      <button className="btn btn-xs mt-2">Sing out</button>

      <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
              
            <p className='text-xl mt-2'> <FaUser/></p>
            </label>
            <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-28 mt-5 ml-5">
              <div className="card-body ">
                <p>welcome </p>
                  
              <button  className="text-black"><Link to="/profile"> Profile  </Link></button>
              <button  className="text-black">Sing out</button>
           </div>
         </div>
       </div>
{/* drop down profile */}
      {/* <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn btn-xs mt-2 w-12 h-12 bg-red-400">
         {FaUser}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}
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
          <div>
            <button></button>
          </div>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Sing In</a>
        </div> */}
      </div>
    </section>
  );
};

export default Navbar;
