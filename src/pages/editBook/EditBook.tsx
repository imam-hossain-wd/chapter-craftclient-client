import IsLoading from "@/components/IsLoading";
import useTitle from "@/hooks/useTitle";
import { useEditSingleBooksQuery } from "@/redux/api/apiSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {  useParams } from "react-router-dom";

const EditBook = () => {
  useTitle('Edit Book');
const {id} = useParams();

const {data:book, isLoading, error, isSuccess} = useEditSingleBooksQuery(id)
const {register,handleSubmit,reset,formState: { errors }} = useForm();

  console.log('yess', book);

  if (isLoading) {
    return (
      <IsLoading />
    );
  }
  if(isSuccess){
    toast.success("success")
  }

  if (error) {
    console.log(error);
    toast.error("Edit page load fail")
  }

  if (!book) {
    toast.success("Book is not found")
    return <p>Book not found</p>;
  }

  const { title, genre, author, publication_date,image_url } = book.data;
  console.log('Book details:', title, genre, author, publication_date); 

const addBookHandler = (event: React.FormEvent<HTMLFormElement>)=> {
    console.log('btn click');
}
    return (
        <section>
            <p className="">this is edit book page</p> <br />
            <div className="flex justify-center">
            
            <form className="flex justify-center " onSubmit={handleSubmit(addBookHandler)}>
        <div className="flex flex-col w-96 ">
          <p className='text-3xl fond-bold text-center text-orange-500' >Edit Book</p>
          <label htmlFor="">
          Title <br />
            <input
              {...register('title', {
                required: true,
              })}
              type="text"
              placeholder="Title"
              defaultValue={title}
              className="input input-bordered mt-2 w-full"
            />{' '}
            {errors.title && (
              <span className="text-red-700">Title is required</span>
            )}
          </label>

          <label htmlFor="">
          Author <br />
            <input
              {...register('author', {
                required: true,
              })}
              type="text"
              defaultValue={author}
              placeholder="Author"
              className="input input-bordered  mt-2 w-full"
            />{' '}
            {errors.author && (
              <span className="text-red-700">Author is required</span>
            )}
          </label>
          <label htmlFor="">
          Genre <br />
            <input
              {...register('genre', {
                required: true,
              })}
              type="text"
              placeholder="Genre"
              defaultValue={genre}
              className="input input-bordered  mt-2 w-full"
            />{' '}
            {errors.genre && (
              <span className="text-red-700">Genre is required</span>
            )}
          </label>

          <label htmlFor="">
          Publication Date <br />
            <input
              {...register('public_date', {
                required: true,
              })}
              type="date"
              placeholder="Date"
              defaultValue={publication_date}
              className="input input-bordered  mt-2 w-full"
            />{' '}
            {errors.publication_date && (
              <span className="text-red-700">Public Date is required</span>
            )}
          </label>

          <label htmlFor="">
            Book Photo Url <br />
            <input
              {...register('image', {
                required: true,
              })}
              defaultValue={image_url}
              type="url"
              className="file-input file-input-bordered mt-2 w-full"
            />{' '}
            {errors.image && (
              <span className="text-red-700">Book photo is required</span>
            )}
          </label>

          <div className="w-full">
          <input
            type="submit"
            value="Add Book"
            className="btn btn-success m-2 w-full mx-auto"
          />
        </div>

        </div>

        
      </form>
        </div>
        </section>
        
    );
};

export default EditBook;