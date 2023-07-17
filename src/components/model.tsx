
const Model = () => {
  return (

        <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle w-72 mx-auto -mt-20"
    >
      <form method="dialog" className="modal-box">
        <p className="py-4 text-black">Do you want to delete the book ? </p>
        <div className="modal-action">
          <button className="btn btn-success">No</button>
          <button className="btn btn-error">yes</button>
        </div>
      </form>
    </dialog>

  );
};

export default Model;
