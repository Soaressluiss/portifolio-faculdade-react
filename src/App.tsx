import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <About />
        <Projects />
      </div>
    </main>
  );
}

export default App;
