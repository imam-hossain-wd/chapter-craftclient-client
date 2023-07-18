import IsLoading from "@/components/IsLoading";
import useTitle from "@/hooks/useTitle";
import { useEditSingleBooksQuery, useUpdateBookMutation } from "@/redux/api/apiSlice";
import { useAppSelector } from "@/redux/hooks";
import {  useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {  useParams } from "react-router-dom";

const EditBook = () => {
  useTitle('Edit Book');
const {id} = useParams();
const { user } = useAppSelector((state) => state.user);

const {data:book, isLoading} = useEditSingleBooksQuery(id)
const {register,handleSubmit,reset,formState: { errors }} = useForm();
const [updateBook, { isError, isSuccess}] = useUpdateBookMutation()
const imageHostKey ='ecf9899ca96e2e39087f5e9f348d4c18';

  if (isLoading) {
    return (
      <IsLoading />
    );
  }
  if(isSuccess){
    toast.success("success")
  }

  if (isError) {
    console.log(isError);
    toast.error("Edit page load fail")
  }

  if (!book) {
    toast.success("Book is not found")
    return <p>Book not found</p>;
  }

  const { title, genre, author, publication_date} = book?.data;

interface IUpdateBook {
    title: string;
    author: string;
    genre: string;
    image: FileList;
    user_email:string | null;
    publication_date: string;
}

  const updateBookHandler = (data:IUpdateBook)=> {

    const title = data.title;
    const author = data.author;
    const image = data.image[0];
    const genre = data.genre;
    const publication_date = data.publication_date;

    // console.log('update',title,author, image, genre,publication_date);

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const image_url = imgData.data.url;
          const updatedBook = {
            title,
            author,
           genre,
             image_url, 
           publication_date, 
           user_email:user?.email
          };
          updateBook({id,updatedBook})
          console.log(id);
          reset()
        }
      })
      .catch(error => {
        console.log(error);
      })
      ;

  }
    return (
        <section>
            <p className="">this is edit book page</p> <br />
            <div className="flex justify-center">
            
            <form className="flex justify-center " onSubmit={handleSubmit(updateBookHandler)}>
        <div className="flex flex-col w-96 ">
          <p className='text-3xl font-bold text-center text-orange-500' >Edit Book</p>
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
              {...register('publication_date', {
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
            Book Photo <br />
            <input
              {...register('image', {
                required: true,
              })}
              type="file"
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