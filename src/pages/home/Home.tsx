import useTitle from "@/hooks/useTitle";
import Books from "./books";

const Home = () => {
  useTitle('Home');
  return (
    <div>
      this is home js
      <Books />
    </div>
  );
};

export default Home;
