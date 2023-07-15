import { IBook } from "@/types/booktypes";
import { useLoaderData } from "react-router-dom";

const Bookdetails = () => {

  const data = useLoaderData() as IBook;
  const {title, genre, author,publication_date} = data
  console.log('book details card data', data);
  
  return (
    <div>
    this is book details 
    <div className="card w-80 h-[450px] shadow-xl bg-gray-900 text-white">
<figure className="px-10 pt-10">
<img src="https://eloquentjavascript.net/img/cover.jpg" alt="Shoes" className="rounded-lg w-60 h-48" />
</figure>
<div className="card-body items-center text-center">
<h2 className="">{title}</h2>
<h2 className="text-sm">{author}</h2>
<h2 className="text-sm">{genre}</h2>
<h2 className="text-sm">{publication_date}</h2>
</div>
</div>
</div>
  );
};

export default Bookdetails;
