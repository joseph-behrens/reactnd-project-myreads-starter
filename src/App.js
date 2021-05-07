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
  changeShelf(event, book) {
    event.persist()
    let i = this.state.books.findIndex(element => element.id === book.id)
    this.setState((prevState) => {
      let updatedBooks = [...prevState.books]
      updatedBooks[i] = { ...updatedBooks[i], shelf: event.target.value }
      return { books: updatedBooks }
    })
  }
  updateSearch(event) {
    this.setState({ search: event.target.value })
  }
  componentDidMount() {
    BooksAPI.getAll().then(res => {
      this.setState({ books: res })
    }
    ).catch(err => console.error(err))
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
        <Route path="/search" render={() => <Search books={this.state.books} search={this.state.search} updateSearch={this.updateSearch} shelves={this.state.shelves} changeShelf={this.changeShelf} />} />
      </BrowserRouter>
    )
  }
}

export default BooksApp
