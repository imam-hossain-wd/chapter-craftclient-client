import useTitle from "@/hooks/useTitle";
import { useCheckoutBookQuery } from "@/redux/api/apiSlice";
import { IBook } from "@/types/booktypes";
import { Link, useParams } from "react-router-dom";

const Checkout = () => {
	useTitle('Checkout');
    const {id} = useParams()
    const { data, isLoading, error } = useCheckoutBookQuery(id);

    if(error){
        console.log(error);
      }
      if (isLoading) {
        return (
          <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        );
      }
    
      if (!data) {
        return <div>Loading...</div>;
      }

      console.log(`data`, data);
      const { _id,title, genre, author, publication_date, image_url
      } = data as IBook;


    return (
        <div>
            this is checkout route
            <div className="container py-5">
			<div className="row">
				<div className="col-md-4">
					<div className="bg-black py-4 px-3 position-sticky top-0 text-white rounded">

						<h1 className='text-xl font-bold '> One of the Best Online Programming Courses </h1>
					</div>
				</div>
				<div>
					
					<img className='w-96  h-full mt-2 h-60' src={`/${image_url
}`} alt="" />
					
					<div className="">
                    <h2 className="text-2xl m-3">{title}</h2>
                    </div>
					{/* <div className="flex justify-between w-2/3">
						<div className='flex items-center'>
							<FaBook></FaBook> <p className='ml-2'>{Lessons}</p>
						</div>
						<div className='flex items-center'>
							<FaUser></FaUser> <p className='ml-2'>{Enrolled}</p>
						</div>
						<div className='flex items-center'>
							<FaClock></FaClock>  <p className='ml-2'>{Duration}</p>
						</div>
						
						<div className='flex items-center'>
							<div className='flex  text-amber-400'>
							<FaStar></FaStar>
							<FaStar></FaStar>
							<FaStar></FaStar>
							<FaStar></FaStar>
							<FaStar></FaStar>
							</div>
							 <p className="ml-2"> {rating}</p>
						</div>
					</div> */}
					
						<div className='mt-5'>
							<h1 className="text-3xl bg-black w-48 p-5 rounded text-white"></h1>Author: ${author} <h1/>
							<h1 className="text-3xl bg-black w-48 p-5 rounded text-white"></h1>genre: ${genre} <h1/>
						</div>
					
					<div className="flex justify-between items-center mt-5 w-44">
					
						<span className="text-lg font-bold">{author}</span>
					</div>
					<div className="mt-4">
						<h3 className="fw-bolder">About the course</h3>
						<h1>{publication_date}</h1>
						
					</div>
                    <Link  to="/buycourses"><button className="px-5 rounded bg-black border-0 text-white  mt-3 py-3">
                    Get premium access
                    </button></Link>
				</div>
				
			</div>
		</div>
        </div>
    );
};

export default Checkout;