import './App.css';
import React, { Component } from 'react';
import Books from '../Books/BookList/Books';
import labEmtService from '../../repository/labEmtRepository';
import { BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  render() {
    return (
      <Router>
        <main>
          <div className='container'>
            <Routes>
              <Route path={'/books'} exact render={() => <Books books={this.state.books} />} />
            </Routes>
          </div>
        </main>
      </Router>
    );
  }

  loadBooks = () => {
    labEmtService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        })
      });
  }

  componentDidMount() {
    this.loadBooks();
  }
}
export default App;
