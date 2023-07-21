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
    dispatch(setSearchTerm(data.searchTerm));
  };

  const onFilterSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.genre, 'genre');
    console.log(data.publicationYear, 'publication year');
    dispatch(setGenre(data.genre));
    dispatch(setPublicationYear(data.publicationYear.toString()));

  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="flex lg:justify-around">
      <form onSubmit={handleSubmit(onFilterSubmit)}>
        <select {...register('genre')}>
          <option value="">All Genres</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="Software Development">Software Development</option>
          <option value="Data Science">Data Science</option>
        </select>

        <input
          className="input input-bordered input-sm mt-1 mr-2 ml-3"
          {...register('publicationYear')}
          type="number"
          placeholder="Publication Year"
        />

        <button type="submit" className='mr-2 btn btn-sm'>Apply Filters</button>
        <button onClick={handleClearFilters} className='btn btn-sm'>Clear Filters</button>
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

