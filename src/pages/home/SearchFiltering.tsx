import { setSearchTerm } from '@/redux/feacture/search/searchSlice';
import { useAppDispatch } from '@/redux/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

const SearchFiltering = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  type Inputs = {
    searchTerm: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.searchTerm, 'search term');
    dispatch(setSearchTerm(data.searchTerm));
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
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
