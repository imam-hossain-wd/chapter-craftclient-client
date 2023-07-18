import { useDeleteBookMutation } from "@/redux/api/apiSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Model = () => {
  
  const navigate = useNavigate()
  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.user);
  const {id} = useParams();

  const bookDeleteHandler = async (id:string | undefined)=> {
    const email = user?.email;
    console.log("email is", email);
    deleteBook({id, email})
    .unwrap()
      .then((response) => {
        navigate('/')
        toast.success(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
}

  return (

        <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle w-72 mx-auto -mt-20"
    >
      <form method="dialog" className="modal-box">
        <p className="py-4 text-black">Do you want to delete the book ? </p>
        <div className="modal-action">
          <button className="btn btn-success">No</button>
          <button onClick={()=>bookDeleteHandler(id)} className="btn btn-error">yes</button>
        </div>
      </form>
    </dialog>

  );
};

export default Model;
