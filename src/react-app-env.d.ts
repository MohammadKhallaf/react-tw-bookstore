/// <reference types="react-scripts" />

interface Format {
  string: string;
}
interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}
interface Book {
  book: {
    id: number;
    title: string;
    subjects: Array<string>;
    authors: Array<Person>;
    translators: Array<Person>;
    bookshelves: Array<string>;
    languages: Array<string>;
    copyright: boolean | null;
    media_type: string;
    formats: Format<any>;
    download_count: number;
  };
}
interface BookList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Book>;
}
