import Header from "./components/Header";
import Hero from "./components/Hero";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-4xl ">
        <Hero />
        <hr className="mx-auto w-1/2 bg-black  dark:bg-white" />
        <Rockets />

        <hr className="mx-auto w-1/2 bg-black  dark:bg-white" />
        <Testimonials />

        <hr className="mx-auto w-1/2 bg-black  dark:bg-white" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
