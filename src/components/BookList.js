import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {
    render() {
        const { books, shelves, changeShelf } = this.props
        return (
            <ol className="books-grid">
                {
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                shelves={shelves}
                                changeShelf={changeShelf}
                            />
                        </li>
                    ))
                }
            </ol>
        )
    }
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BookList