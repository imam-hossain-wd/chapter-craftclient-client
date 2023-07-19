interface Review {
    _id: string;
    rating: number;
    comment: string;
  }

export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publication_date: string;
    image_url: string;
    reviews: Review[];
    quantity?: number
}

export interface BookdetailsCardProps {
  bookDetails: IBook;
}

export interface BookCartProps {
  book: IBook;
}

export interface FormData {
  title: string;
  author: string;
  image: FileList;
  genre: string;
  public_date: string;
}