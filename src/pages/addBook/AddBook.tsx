import { useAddBookMutation } from '@/redux/api/apiSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const AddBook = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm();

  const imageHostKey ='ecf9899ca96e2e39087f5e9f348d4c18';
  console.log(imageHostKey);
  const [addBook, { isError, isSuccess}] = useAddBookMutation()

// if(isLoading){
//   return (
//     <IsLoading />
//   )
// }
if(isSuccess){
    toast.success("Book Added successfully")
    console.log(isSuccess);
}
if(isError){
  toast.error("Book Added Failed")
  console.log(isError);
}
interface FormData {
  title: string;
  author: string;
  image: FileList;
  genre: string;
  public_date: string;
}

  const addBookHandler :SubmitHandler<FormData> = (data)=> {

    const title = data.title;
    const author = data.author;
    const image = data.image[0];
    const genre = data.genre;
    const publication_date = data.public_date;

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
          const book = {
            title,
            author,
           genre,
             image_url, 
           publication_date, 
          };
          addBook(book)
          reset()
        }
      })
      .catch(error => {
        console.log(error);
      })
      ;

  }
  return (
    <div>
      <form className="" onSubmit={handleSubmit(addBookHandler)}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <label htmlFor="">
          Title <br />
            <input
              {...register('title', {
                required: true,
              })}
              type="text"
              placeholder="Title"
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

        </div>

        <div className="w-full">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-error m-2 w-72 mx-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
