import { removeFromBook, updateReadingStatus } from '@/redux/feacture/cart/cartslice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { BsTrash } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

const Wishlist = () => {
  const { books } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemove = (bookId: string) => {
    dispatch(removeFromBook(bookId));
  };

  const handleReadingStatusChange = (bookId: string, status: "Current Reading" | "Plan To Read" | "Finish Reading") => {
    dispatch(updateReadingStatus({ bookId, status }));
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="w-full md:w-9/12 text-black">
          <h3 className="text-3xl my-5 text-center font-bold">My Wishlist</h3>
          <div className="overflow-x-auto">
            <table className="table w-full divide-y">
              <thead>
                <tr className='font-bold'>
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Current Reading</th>
                  <th>Plan to Read</th>
                  <th>Finish Reading</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map((book, i) => (
                    <tr key={i}>
                      <th>
                        <img
                          src={book.image_url}
                          className="w-12 h-12 rounded-full"
                          alt=""
                        />
                      </th>
                      <td>{book.title}</td>
                      <td>
                        <button
                          type="button"
                          className={`h-9 w-16 border-0 text-xl font-bold ml-5 ${
                            book.readingStatus === "Current Reading" ? 'text-green-500' : ''
                          }`}
                          onClick={() => handleReadingStatusChange(book._id, "Current Reading")}
                        >
                          <FaCheck />
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className={`h-9 w-16 border-0 text-xl font-bold ml-5 ${
                            book.readingStatus === "Plan To Read" ? 'text-green-500' : ''
                          }`}
                          onClick={() => handleReadingStatusChange(book._id, "Plan To Read")}
                        >
                          <FaCheck />
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className={`h-9 w-16 border-0 text-xl font-bold ml-5 ${
                            book.readingStatus === "Finish Reading" ? 'text-green-500' : ''
                          }`}
                          onClick={() => handleReadingStatusChange(book._id, "Finish Reading")}
                        >
                          <FaCheck />
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="h-9 w-16 border-0 font-bold"
                          onClick={() => handleRemove(book._id)}
                        >
                          <BsTrash className="w-5 h-5 hover:text-red-500 mx-auto" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;



