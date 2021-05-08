import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './pages/Search'
import Shelves from './pages/Shelves'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateBooksState = this.updateBooksState.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  state = {
    search: '',
    shelves: [
      "currentlyReading",
      "wantToRead",
      "read"
    ],
    books: []
  }
  updateBooksState() {
    BooksAPI.getAll().then(res => {
        this.setState({ books: res})
      }
    ).catch(err => console.error(err))
  }
  clearSearch() {
      this.setState({search: ''})
  }
  changeShelf(event, book) {
    event.persist();
    BooksAPI.update(book, event.target.value);
    let i = this.state.books.findIndex(element => element.id === book.id);
    if (i >= 0) {
        this.setState((prevState) => {
            let updatedBooks = [...prevState.books];
            updatedBooks[i] = { ...updatedBooks[i], shelf: event.target.value };
            return { books: updatedBooks };
        })
    } else {
        this.setState((prevState) => {
            return {books: [book, ...prevState.books]}
        })
        this.updateBooksState();
    }
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  componentDidMount() {
      this.updateBooksState();
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() =>
          <div className="app">
            <Shelves books={this.state.books} shelves={this.state.shelves} changeShelf={this.changeShelf} />
          </div>
        }
        />
        <Route path="/search" render={() => <Search books={this.state.books} search={this.state.search} updateSearch={this.updateSearch} shelves={this.state.shelves} changeShelf={this.changeShelf} clearSearch={this.clearSearch} />} />
      </BrowserRouter>
    )
  }
}

export default BooksApp
