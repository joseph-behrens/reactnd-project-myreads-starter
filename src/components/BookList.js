import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {
    render() {
        const { books } = this.props
        return (
            <ol className="books-grid">
                {
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                bookId={book.id}
                                width={book.width}
                                height={book.height}
                                backgroundImage={book.backgroundImage}
                                title={book.title}
                                authors={book.authors}
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