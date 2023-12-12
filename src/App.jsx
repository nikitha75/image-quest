import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

const App = () => {
  return (
    <main>
      {/* <div className="logo">ImageQuest</div> */}
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;
