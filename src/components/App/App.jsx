import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { deleteBook, addBook, updateBook, getAllBooks } from '../../api-calls/api-calls';
import BooksList from '../Book/BooksList';

export default function App() {
  const [books, setBooks] = useState([]);
  //const [authors, setAuthors] = useState([]);
  //const [countries, setCountries] = useState([]);

  useEffect(() => {
    updateBooks();
  }, []);

  function updateBooks() {
    getAllBooks().then((books) => {
      setBooks(books);
    });
  }

  function deleteBookLocal(id) {
    deleteBook(id).then(() => {
      updateBooks();
    });
  }

  function addBookLocal(name, category, authorId, availableCopies) {
    let book = { name: name, category: category, authorId: authorId, availableCopies: availableCopies }
    addBook(book).then(() => {
      updateBooks();
    });
  }

  function editBookLocal(id, name, category, authorId, availableCopies) {
    let book = { name: name, category: category, authorId: authorId, availableCopies: availableCopies }
    updateBook(id, book).then(() => {
      updateBooks();
    });
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/books" element={<BooksList books={books}
            onDelete={deleteBookLocal}
            onEdit={editBookLocal} />} />
        </Routes>
      </div>
    </Router>
  );
}