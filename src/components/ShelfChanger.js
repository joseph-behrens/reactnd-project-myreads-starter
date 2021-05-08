import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class ShelfChanger extends Component {
    state = {
        redirect: false
    }
    handleChange = (event) => {
        this.props.changeShelf(event, this.props.book)
        this.setState({redirect: true})
    }
    render() {
        const {shelves} = this.props;
        const current_shelf = shelves.indexOf(this.props.book.shelf) > -1 ? this.props.book.shelf : "none"
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={current_shelf}>
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