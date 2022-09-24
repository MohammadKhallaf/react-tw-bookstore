import axios from "axios";

export const getAllBooks = (page: number) =>
  axios.get(`https://gutendex.com/books?page=${page}`).then((res) => res.data);

export const getBook = (bookId: number | string) =>
  axios.get("https://gutendex.com/books/" + bookId).then((res) => res.data);

export const getSubject = (subject: string) =>
  axios.get("https://gutendex.com/books", { params: { topic: subject } });

export const searchBook = (query: string) =>
  axios
    .get("https://gutendex.com/books", { params: { search: query } })
    .then((res) => res.data);
