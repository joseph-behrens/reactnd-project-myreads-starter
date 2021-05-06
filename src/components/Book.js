import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    render() {
        const { title, authors, backgroundImage, width, height, changeShelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: parseInt(width), height: parseInt(height), backgroundImage: `url(${backgroundImage})` }}></div>
                    <ShelfChanger onSelection={changeShelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    backgroundImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired
}

export default Book