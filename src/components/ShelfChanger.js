import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
    handleChange = (event) => {
        this.props.changeShelf(event, this.props.book)
    }
    render() {
        const {shelves} = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.props.book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    {shelves.map(shelf => {
                        let title = shelf.replace(/([A-Z])/g, " $1");
                        title = title.charAt(0).toUpperCase() + title.slice(1);
                        return (
                            <option key={shelf} value={shelf}>{title}</option>
                        )
                    })}
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