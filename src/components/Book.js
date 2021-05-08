import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    state = {
        img_w: 134,
        img_h: 180
    }
    async getImageDimensions(image) {
        console.log('Getting dimensions for ' + image)
        const img_obj = new Image();
        img_obj.onload = function () { }
        img_obj.src = image;
        return img_obj
    }
    componentDidMount() {
        if (this.props.book.imageLinks) {
            const img_promise = new Promise((resolve, reject) => {
                let image = new Image();
                image.src = this.props.book.imageLinks.thumbnail;
                image.onload = () => {
                    resolve(image)
                }
                image.onerror = (error) => {
                    reject(error)
                }
            })

            img_promise.then(image => this.setState({img_h: image.height, img_w: image.width}))
        }
    }
    render() {
        const { book, shelves, changeShelf } = this.props;
        const image = book.imageLinks ? book.imageLinks.thumbnail : "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088777__180.png"
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: this.state.img_w, height: this.state.img_h, backgroundImage: `url(${image})` }}></div>
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