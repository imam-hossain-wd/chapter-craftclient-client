import { useEditSingleBooksQuery } from "@/redux/api/apiSlice";
import {  useParams } from "react-router-dom";

const EditBook = () => {
const {id} = useParams();

const {data:book, isLoading, error} = useEditSingleBooksQuery(id)

  console.log('yess', book);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (error) {
    console.log(error);
  }

  if (!book) {
    return <p>Book not found</p>;
  }

  const { title, genre, author, publication_date,image_url } = book.data;
  console.log('Book details:', title, genre, author, publication_date); 

const handleBookUpdate = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    console.log('btn click');
}
    return (
        <section>
            <p className="">this is edit book page</p> <br />
            <div className="flex justify-center">
            
            <form onSubmit={handleBookUpdate} className="flex flex-col w-96">
            <input type="text" defaultValue={title} placeholder="Enter title" className="input input-bordered w-full  mb-2" />
            <input type="text" defaultValue={genre} placeholder="Type here" className="input  input-bordered w-full  mb-2" />
            <input type="text" defaultValue={author} placeholder="Type here" className="input input-bordered w-full  mb-2" />
            <input type="url" defaultValue={image_url} placeholder="Type here" className="input input-bordered w-full  mb-2" />
            <input type="text" defaultValue={publication_date} placeholder="Type here" className="input input-bordered w-full  mb-2" />
            <input type="submit" placeholder="Type here" className="input input-bordered w-full btn" />
            </form>
        </div>
        </section>
        
    );
};

export default EditBook;