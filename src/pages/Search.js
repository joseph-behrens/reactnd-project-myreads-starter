import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  state = {
      search_books: []
  }
  handleChange = (event) => {
    this.props.updateSearch(event)
    this.updateSearchBooks(event)
  }
  updateSearchBooks(event) {
    if (event.target.value !== '') {
        BooksAPI.search(event.target.value).then( new_books => {
            if (new_books && new_books.length > 0) {
                this.setState({
                    search_books: new_books
                })
            } else {this.setState({search_books: []})}
        }).catch(err => console.error(err))
    } else {
        this.setState({search_books: []})
    }
  }
  componentDidMount() {
    this.props.clearSearch();
  }
  render() {
    const { search, shelves, changeShelf, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.handleChange} value={search} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {search !== '' && this.state.search_books.length > 0 && this.state.search_books.map(book => {
                let book_on_shelf = books.filter(b => b.id === book.id)
                let book_to_render = book_on_shelf.length > 0 ? book_on_shelf[0] : book;
                return (
                  <li key={book_to_render.id}>
                    <Book
                      book={book_to_render}
                      shelves={shelves}
                      changeShelf={changeShelf}
                    />
                  </li>
                )
              })}</ol>
        </div>
      </div>
    )
  }
}

Search.protoTypes = {
  changeShelf: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.string.isRequired
}

export default Search;