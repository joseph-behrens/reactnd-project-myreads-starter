import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

class BookShelf extends Component {
    render() {
        const { books, title, changeShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookList books={books} changeShelf={changeShelf} />
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelf