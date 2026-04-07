import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <About />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
