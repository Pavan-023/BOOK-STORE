import React from 'react';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    cover: "https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/x/i/3/the-great-gatsby-original-imag7jpfh26vcrxf.jpeg?q=70"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&fit=crop&w=400&q=80"
  },
 {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    cover: "https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&fit=crop&w=400&q=80"
  },
  {
  id: 8,
  title: "Steve Jobs",
  author: "Walter Isaacson",
  genre: "Biography",
  cover: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?crop=entropy&fit=crop&w=400&q=80"
}
];

export default function BooksPage() {
  return (
    <div className="books-page">
      <h1 className="books-title">Explore Our Books</h1>
      <p className="books-subtitle">Browse books by genre, author, or title</p>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.cover} alt={book.title} className="book-cover" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">by {book.author}</p>
            <span className="book-genre">{book.genre}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
