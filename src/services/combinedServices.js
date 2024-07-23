import axios from "axios";

const BASE_URL = "http://localhost:8080";

class combinedServices {
  decreaseQuantity(userId, BookId) {
    return axios.put(BASE_URL + "/decrease/" + userId + "/" + BookId);
  }
  purchaseCart(userId) {
    return axios.put(BASE_URL + "/PurchaseCart/" + userId);
  }
  purchaseItem(bookId, amount) {
    return axios.put(BASE_URL + "/purchaseItem/" + bookId + "/" + amount);
  }
  increaseQuantity(userId, bookId) {
    return axios.put(BASE_URL + "/increase/" + userId + "/" + bookId);
  }
  addToCart(userId, bookId) {
    return axios.put(BASE_URL + "/addtocart/" + userId + "/" + bookId);
  }
}

export default new combinedServices();
