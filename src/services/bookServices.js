import axios from "axios";
const BOOK_BASE_URL = "http://localhost:8080/books";

class bookServices {
  saveBook(book) {
    return axios.post(BOOK_BASE_URL, book);
  }
  getBooks() {
    return axios.get(BOOK_BASE_URL);
  }
  deleteBook(id) {
    return axios.delete(BOOK_BASE_URL + "/" + id);
  }
  getBookById(id) {
    return axios.get(BOOK_BASE_URL + "/" + id);
  }
  updateBook(user, id) {
    return axios.put(BOOK_BASE_URL + "/" + id, user);
  }
}
export default new bookServices();
