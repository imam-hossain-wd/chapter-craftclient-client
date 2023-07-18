import useTitle from "@/hooks/useTitle";
import Books from "./books";
import SearchFiltering from "./SearchFiltering";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      this is home js
        <SearchFiltering />
      <Books />
    </div>
  );
};

export default Home;
