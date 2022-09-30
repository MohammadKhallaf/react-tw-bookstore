import { useState } from "react";
import { Navbar } from "./components/Navbar";
import BtmPagination from "./components/BtmPagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import { useAppSelector } from "./app/hooks";
import { selectCount } from "./app/features/books/booksSlice";

function App() {
  const [page, setPage] = useState(1);
  const count = useAppSelector(selectCount);

  return (
    <Router>
      <Navbar />
      <div className="mt-20 md:mt-[10rem]"></div>
      <main className="container mx-auto">
        <Routes>
          <Route index element={<HomePage page={page} />}></Route>
          <Route path="book">
            <Route path=":bookId" element={<BookPage />} />
          </Route>
        </Routes>
      </main>
      <footer>
        <Routes>
          <Route
            index
            element={
              <BtmPagination page={page} count={count} setPage={setPage} />
            }
          ></Route>
        </Routes>
      </footer>
    </Router>
  );
}

export default App;
