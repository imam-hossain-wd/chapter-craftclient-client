import { useForm } from 'react-hook-form';

const AddBook = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm();

  const addBookHandler = (data)=> {
    console.log(data);

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

          <label htmlFor="">
            Rating <br />
            <select
              className="select select-bordered mt-2 w-full"
              {...register("rating", {
                required: true,
              })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rating && (
              <span className="text-red-700">Rating is required</span>
            )}
          </label>

          <label htmlFor="">
            Comment <br />
            <input
              {...register('comment', {
                required: true,
              })}
              type="text"
              placeholder="Comment"
              className="input input-bordered mt-2 w-full"
            />{' '}
            {errors.comment && (
              <span className="text-red-700">comment is required</span>
            )}
          </label>
        </div>

        <label htmlFor="" className="w-full">
          Description <br />
          <div className="form-control ">
            <textarea
              {...register('description', {
                required: true,
              })}
              className="textarea textarea-bordered h-24 w-4/5 mt-2 "
              placeholder="write something about product"
            ></textarea>
          </div>
          {errors.productName && (
            <span className="text-red-700">
              Product description is required
            </span>
          )}
        </label>

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
