import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { deleteBook, getAllBooks } from '../../api-calls/api-calls';
import BooksList from '../Book/BooksList';

export default function App() {
  const [books, setBooks] = useState([]);
  //const [authors, setAuthors] = useState([]);
  //const [countries, setCountries] = useState([]);

  useEffect(() => {
    updateBooks();
  }, []);

  function updateBooks() {
    setBooks(getAllBooks());
  }

  function deleteBook(id) {
    deleteBook(id).then(() => {
      updateBooks();
    });
  }

  function addBook(name, category, authorId, availableCopies) {
    let book = { name: name, category: category, authorId: authorId, availableCopies: availableCopies }
    addBook(book).then(() => {
      updateBooks();
    });
  }

  function editBook(id, name, category, authorId, availableCopies) {
    let book = { name: name, category: category, authorId: authorId, availableCopies: availableCopies }
    editBook(id, book).then(() => {
      updateBooks();
    });
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/books" element={<BooksList books={books}
            onDelete={deleteBook}
            onEdit={editBook} />} />
        </Routes>
      </div>
    </Router>
  );
}