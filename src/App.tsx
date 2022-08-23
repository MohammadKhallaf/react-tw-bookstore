import "./App.css";
import BookCard from "./components/BookCard";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
      <HeroSection />
        <section>
          <div>
            <h3 className="text-2xl font-bold mb-3">Popular Now</h3>
            <div></div>
          </div>

          <div className="flex flex-row space-x-7 overflow-auto">
            <BookCard
              title="Pride of prese"
              description="some book description"
              rate={1}
            />
            <BookCard
              title="Pride of prese"
              description="some book description"
              rate={1}
            />
            <BookCard
              title="Pride of prese"
              description="some book description"
              rate={1}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
