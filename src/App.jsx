import Header from "./components/Header";
import Hero from "./components/Hero";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Hero />
      <hr className="mx-auto w-1/2 bg-black  dark:bg-white" />
      <Rockets />

      <hr className="mx-auto w-1/2 bg-black  dark:bg-white" />
      <Testimonials />

      <hr className="mx-auto w-1/2 bg-black  dark:bg-white" />

      <section id="contact" className="my-12 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Contact Us
        </h2>
      </section>
    </div>
  );
}

export default App;
