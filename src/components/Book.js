import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    getImageDimensions(image) {
        console.log('Getting dimensions for ' + image)
        const img_obj = new Image();
        img_obj.onload = function () { }
        img_obj.src = image;
        return img_obj
    }
    render() {
        const { book, shelves, changeShelf } = this.props;
        const dimensions = this.getImageDimensions(book.imageLinks.thumbnail);
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: dimensions.width, height: dimensions.height, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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