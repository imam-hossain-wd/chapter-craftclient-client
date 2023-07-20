import { useAppSelector } from "@/redux/hooks";
import { FaBookReader, FaCheckCircle, FaTasks } from 'react-icons/fa';


const Bookstatus = () => {
    const { books } = useAppSelector((state) => state.cart);
    return (
        <section>
        <div className="flex justify-center">
          <div className="w-full md:w-9/12 text-black">
            <h3 className="text-3xl my-5 text-center font-bold">Book Status</h3>
            <div className="overflow-x-auto">
              <table className="table w-full  divide-y">
                <thead>
                  <tr className='font-bold'>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th></th>
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
                        <td className="">{book.readingStatus}  </td>
                        <td>{
                          book.readingStatus ==="Finish Reading" && <p className="ml-5 text-green-500 text-xl"><FaCheckCircle/></p>  
                        } 
                        {
                          book.readingStatus ==="Current Reading" && <p className="ml-5 text-green-500 text-xl"><FaBookReader/></p>  
                        } 
                        {
                          book.readingStatus ==="Plan To Read" && <p className="ml-5 text-green-500 text-xl"><FaTasks/></p>  
                        } </td>
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

export default Bookstatus;