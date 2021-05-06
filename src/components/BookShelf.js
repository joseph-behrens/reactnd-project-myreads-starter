import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

class BookShelf extends Component {
    render() {
        const { books, title } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookList books={books} />
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired
}

export default BookShelf