
const BookCart = ({book}) => {

    const { title, author, genre, publication_date } = book;
    return (
        <div className={`card p-6 md:card-side shadow-xl bg-red-200`}>
        <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZdCObmc9MCxWf3vtsSSMKn7lg7ux8XJrptw9Llbn&s" alt="Movie" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-title">{author}</h2>
            <h2 className="card-title">{genre}</h2>
            <h2 className="card-title">{publication_date}</h2>
        </div>
    </div>
    );
};

export default BookCart;