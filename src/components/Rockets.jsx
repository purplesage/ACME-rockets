import rocketMan from "../assets/rocketman.png";
import rocketRide from "../assets/rocketride.png";
import rocketLaunch from "../assets/rocketlaunch.png";

const Rockets = () => {
  return (
    <section
      id="rockets"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 mb-6 scroll-mt-20 p-6 "
    >
      <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rockets
      </h2>

      <ul className="m-12 mx-auto flex list-none flex-col items-center gap-8 sm:flex-row">
        <li className="flex w-2/3 flex-col items-center rounded-3xl border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6 ">
          <img src={rocketMan} alt="Explorer" className="mb-6 w-1/2" />

          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Explorer
          </h3>

          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $
          </p>

          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Affordable Exploration
          </p>
        </li>

        <li className="flex w-2/3 flex-col items-center rounded-3xl border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6 ">
          <img src={rocketRide} alt="adventurer" className="mb-6 w-1/2" />

          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Adventurer
          </h3>

          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $$
          </p>

          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Best Selling Rocket!
          </p>
        </li>

        <li className="flex w-2/3 flex-col items-center rounded-3xl border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6 ">
          <img src={rocketLaunch} alt="Infinity" className="mb-6 w-1/2" />

          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Infinity
          </h3>

          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $$$
          </p>

          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Luxury Starship
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Rockets;
