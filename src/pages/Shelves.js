import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from '../components/BookShelf';

class Shelves extends Component {
    render() {
        const { books, shelves, changeShelf } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Book Shelves</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => {
                            let title = shelf.replace(/([A-Z])/g, " $1");
                            title = title.charAt(0).toUpperCase() + title.slice(1);
                            return (
                                <BookShelf
                                    key={shelf}
                                    title={title}
                                    books={books.filter(book => book.shelf === shelf)}
                                    changeShelf={changeShelf}
                                    shelves={shelves}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

Shelves.protoTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    shelves: PropTypes.arrayOf(PropTypes.string)
}

export default Shelves;