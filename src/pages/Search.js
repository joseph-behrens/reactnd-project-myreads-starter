import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class Search extends Component {
  handleChange = (event) => {
    this.props.updateSearch(event)
  }
  render() {
    const { search, shelves, changeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.handleChange} value={this.props.search} placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books.filter(book => book.title.toLowerCase().indexOf(search.toLowerCase()) > -1 || book.authors.join('').toLowerCase().indexOf(search.toLowerCase()) > -1)
              .map(book => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
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