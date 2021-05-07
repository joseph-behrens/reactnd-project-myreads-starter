import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    render() {
        const { book, shelves, changeShelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: parseInt(book.width), height: parseInt(book.height), backgroundImage: `url(${book.backgroundImage})` }}></div>
                    <ShelfChanger changeShelf={changeShelf} book={book} shelves={shelves} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object,
    changeShelf: PropTypes.func.isRequired
}

export default Book