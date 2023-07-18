import { useDeleteBookMutation } from "@/redux/api/apiSlice";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Model = () => {

  const navigate = useNavigate()
  const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation();
  const {id} = useParams();


  if(isError){
    console.log(isError);
  }
  if(isSuccess){
    console.log(isSuccess);
  }
  const bookDeleteHandler = async (id:string | undefined)=> {
    deleteBook(id)
    toast.success("book deleted successfully")
    navigate('/')
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
