import instance from "../axios/axios";

export async function getAllBooks() {
  const response = await instance.get("/books");
  return response.data;
}

export async function getBookById(id) {
  const response = await instance.get(`/books/${id}`);
  return response.data;
}

export async function addBook(book) {
  const response = await instance.post("/books", book);
  return response.data;
}

export async function updateBook(id, book) { 
  const response = await instance.put(`/books/${id}`, book);
  return response.data;
}

export async function deleteBook(id) {
  const response = await instance.delete(`/books/${id}`);
  return response.data;
}

export async function markAsRented(id) {
  const response = await instance.put(`/books/${id}/rent`);
  return response.data;
}

export async function getAllBooksWithPagination(pageNumber, pageSize) {
  const response = await instance.get(`/books?page=${pageNumber}&size=${pageSize}`);
  return response.data;
}