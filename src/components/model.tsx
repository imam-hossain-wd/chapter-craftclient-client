import { useDeleteBookMutation } from "@/redux/api/apiSlice";
import { useParams } from "react-router-dom";

const Model = () => {
  const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation();
  const {id} = useParams();

  const bookDeleteHandler = async (id:string | undefined)=> {
    deleteBook(id)
  }
  if(isError){
    console.log(isError);
  }
  if(isSuccess){
    console.log(isSuccess);
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
