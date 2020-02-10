export enum ActionTypes {
  setBooks = "books/setBooks",
  updateBooks = "books/updateBooks",
  addBooks = 'books/addBooks',
  deleteBooks = 'books/deleteBooks',
  fetchStart = "books/fetchStart",
  fetchEnd = "books/fetchEnd"
}

export interface Book {
  id: string;
  title: string;
  author: string;
  published_date: string;
  book_cover: string;
  quantity: number;
}

export interface BooksReducer {
  books: Book[];
  loading: Boolean;
  hasLoaded: Boolean;
  errorMessage: string;
}
