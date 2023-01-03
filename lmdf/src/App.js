
import{Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Creation from "./pages/Creation.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main className='main__container'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="Creation/:id" element={<Creation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
