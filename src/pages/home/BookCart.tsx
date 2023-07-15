
const BookCart = ({book}) => {

    const { title, author, genre, publication_date } = book;
    return (
    //     <div className={`card p-6 md:card-side shadow-xl bg-red-200`}>
    //     <figure>
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZdCObmc9MCxWf3vtsSSMKn7lg7ux8XJrptw9Llbn&s" alt="Movie" />
    //     </figure>
    //     <div className="card-body">
    //         <h2 className="card-title">{title}</h2>
    //         <h2 className="card-title">{author}</h2>
    //         <h2 className="card-title">{genre}</h2>
    //         <h2 className="card-title">{publication_date}</h2>
    //     <div className="flex justify-between">
    //     <button className="btn btn-sm">Details</button>
    //     <button className="btn btn-sm">Checkout</button>
    //     </div>
    //     </div>
    // </div>

    <div className="card w-80 h-96 shadow-xl bg-gray-900 text-white">
  <figure className="px-10 pt-10">
    <img src="https://eloquentjavascript.net/img/cover.jpg" alt="Shoes" className="rounded-xl w-60 h-60" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">{title}</h2>
      <h2>{author}</h2>
      <h2>{genre}</h2>
      <h2>{publication_date}</h2>
    <div className="card-actions">
      <button className="btn bg-red-400 border-0 rounded-full btn-sm ">Details</button>
      <button className="btn bg-red-400 border-0 rounded-full btn-sm ">Checkout</button>
    </div>
  </div>
</div>
    );
};

export default BookCart;