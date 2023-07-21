import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - Book Catalog`;
  }, [title]);
};

export default useTitle;