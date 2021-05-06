import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
    handleChange = (event) => {
        this.props.changeShelf(event, this.props.book)
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.props.book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

ShelfChanger.protoTypes = {
    changeShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
}

export default ShelfChanger