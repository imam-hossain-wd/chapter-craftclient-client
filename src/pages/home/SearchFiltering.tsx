
import { clearFilters, setGenre, setPublicationYear, setSearchTerm } from '@/redux/feacture/search/searchSlice';
import { useAppDispatch } from '@/redux/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

const SearchFiltering = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  type Inputs = {
    searchTerm: string;
    genre: string;
    publicationYear: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.searchTerm, 'search term');
    dispatch(setSearchTerm(data.searchTerm));
  };

  const onFilterSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.genre, 'genre');
    console.log(data.publicationYear, 'publication year');
    dispatch(setGenre(data.genre));
    dispatch(setPublicationYear(parseInt(data.publicationYear)));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="flex lg:justify-around">
      <form onSubmit={handleSubmit(onFilterSubmit)}>
        <select {...register('genre')}>
          <option value="">All Genres</option>
          <option value="web development">Web Development</option>
          <option value="programming">Programming</option>
        </select>

        <input
          className="input input-bordered input-sm mt-1 mr-2 ml-3"
          {...register('publicationYear')}
          type="number"
          placeholder="Publication Year"
        />

        <button type="submit" className='mr-2 btn btn-sm'>Apply Filters</button>
        <button onClick={handleClearFilters}className='btn btn-sm' >Clear Filters</button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className="mr-10">
        <input
          className="input input-bordered input-sm mt-1 mr-2"
          {...register('searchTerm')}
          type="text"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-sm btn-primary"
        />
      </form>
    </div>
  );
};

export default SearchFiltering;


// import { clearFilters, setGenre, setPublicationYear, setSearchTerm } from '@/redux/feacture/search/searchSlice';
// import { useAppDispatch } from '@/redux/hooks';
// import { SubmitHandler, useForm } from 'react-hook-form';

// const SearchFiltering = () => {
//   const { register, handleSubmit } = useForm<Inputs>();
//   const dispatch = useAppDispatch();

//   type Inputs = {
//     searchTerm: string;
//     genre: string;
//     publicationYear: string;
//   };

//   const FilterComponent = () => {
//     const dispatch = useDispatch();
  
//     const handleGenreChange = (event) => {
//       const genre = event.target.value;
//       dispatch(setGenre(genre));
//     };
  
//     const handlePublicationYearChange = (event) => {
//       const publicationYear = parseInt(event.target.value);
//       dispatch(setPublicationYear(publicationYear));
//     };
  
//     const handleClearFilters = () => {
//       dispatch(clearFilters());
//     };

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data.searchTerm, 'search term');
//     dispatch(setSearchTerm(data.searchTerm));
//   };

//   const onFilterSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data.genre, 'genre');
//     console.log(data.publicationYear, 'publication year');
//     // Handle filter logic here
//   };

//   return (
//     <div className="flex justify-center">
//       <form onSubmit={handleSubmit(onFilterSubmit)}>
//         <select {...register('genre')}>
//           <option value="">All Genres</option>
//           <option value="web development">Web Development</option>
//           <option value="programming">Programming</option>
//         </select>

//         <input
//           className="input input-bordered input-sm mt-1 mr-2"
//           {...register('publicationYear')}
//           type="number"
//           placeholder="Publication Year"
//         />

//         <button type="submit">Apply Filters</button>
//       </form>

//       <form onSubmit={handleSubmit(onSubmit)} className="mr-10">
//         <input
//           className="input input-bordered input-sm mt-1 mr-2"
//           {...register('searchTerm')}
//           type="text"
//         />
//         <input
//           type="submit"
//           value="Search"
//           className="btn btn-sm btn-primary"
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchFiltering;









// import { setSearchTerm } from '@/redux/feacture/search/searchSlice';
// import { useAppDispatch } from '@/redux/hooks';
// import { SubmitHandler, useForm } from 'react-hook-form';

// const SearchFiltering = () => {
//   const { register, handleSubmit } = useForm<Inputs>();

//   const dispatch = useAppDispatch();

//   type Inputs = {
//     searchTerm: string;
//   };

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data.searchTerm, 'search term');
//     dispatch(setSearchTerm(data.searchTerm));
//   };

//   const onFilterSubmit = (data) => {
//     onFilter(data.genre, data.publicationYear);
//   };

//   return (
//     <div className="flex justify-center">
      

//       <form onSubmit={handleSubmit(onFilterSubmit)}>
//         <select {...register('genre')}>
//           <option value="">All Genres</option>
//           <option value="fiction">Fiction</option>
//           <option value="non-fiction">Non-Fiction</option>
//         </select>

//         <input
//           className="input input-bordered input-sm mt-1 mr-2"
//           {...register('publicationYear')}
//           type="number"
//           placeholder="Publication Year"
//         />

//         <button type="submit">Apply Filters</button>
//       </form>

//       <form onSubmit={handleSubmit(onSubmit)} className='mr-10'>
//         <input
//           className="input input-bordered input-sm mt-1 mr-2"
//           {...register('searchTerm')}
//           type="text"
//         />
//         <input
//           type="submit"
//           value="Search"
//           className="btn btn-sm btn-primary"
//         />
//       </form>
//     </div>
//   );
// };
// export default SearchFiltering;
