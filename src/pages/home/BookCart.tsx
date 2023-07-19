import { BookCartProps } from "@/types/booktypes";
import { Link } from "react-router-dom";
const BookCart: React.FC<BookCartProps> = ({book}) => {


    const { title, author, genre, publication_date } = book;

    return (




    <div className="card w-80 h-[450px] shadow-xl bg-gray-100 ">
  <figure className="px-10 pt-10">
    <img src="https://eloquentjavascript.net/img/cover.jpg" alt="Shoes" className="rounded-lg w-60 h-48" />
  </figure>
  <div className="card-body  ">
  <h2 className="text-lg font-bold">{title}</h2>
      <h2 className="text-sm">{author}</h2>
      <h2 className="text-sm">{genre}</h2>
      <h2 className="text-sm">{publication_date}</h2>
  </div>
    <div className="flex justify-around mb-3">

      <button  className="btn w-32 bg-gray-800 text-white hover:text-black border-0 rounded-full btn-sm "><Link to={`/book/${book?._id}`}>See details</Link></button>
      <button className="btn w-32 bg-gray-800 text-white hover:text-black border-0 rounded-full btn-sm ">
      <Link to={`/checkout/${book?._id}`}>Checkout</Link>
      </button>
    </div>
</div>

//     <div className="card w-80 h-[450px] shadow-xl bg-gray-900 text-white">
//   <figure className="px-10 pt-10">
//     <img src="https://eloquentjavascript.net/img/cover.jpg" alt="Shoes" className="rounded-lg w-60 h-48" />
//   </figure>
//   <div className="card-body items-center text-center">
//   <h2 className="">{title}</h2>
//       <h2 className="text-sm">{author}</h2>
//       <h2 className="text-sm">{genre}</h2>
//       <h2 className="text-sm">{publication_date}</h2>
//     <div className="card-actions">

//       <button className="btn bg-red-400 border-0 rounded-full btn-sm "><Link to={`/book/${book?._id}`}>See details</Link></button>
//       <button className="btn bg-red-400 border-0 rounded-full btn-sm ">
//       <Link to={`/checkout/${book?._id}`}>Checkout</Link>
//       </button>
//     </div>
//   </div>
// </div>
    );
};

export default BookCart;