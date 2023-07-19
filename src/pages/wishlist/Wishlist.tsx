import { useAppSelector } from '@/redux/hooks';
import { BsTrash } from 'react-icons/bs';


const Wishlist = () => {
  const { books } = useAppSelector((state) => state.cart);
  console.log(books);
  return (
    <section>
      <div className="flex justify-center">
        <div className="w-full md:w-9/12 text-black">
          <h3 className="text-3xl my-5 text-center font-bold">My Wishlist</h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Title</th>
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
                          className=" h-9 w-16 border-0 font-bold "
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




