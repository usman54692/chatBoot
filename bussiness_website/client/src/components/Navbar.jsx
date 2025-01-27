import React from "react";
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <nav className="  border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://awaist.sg-host.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://awaist.sg-host.com/wp-content/uploads/2024/05/Express-Evictions-5-2048x652.png"
              className="h-12 text-black bg-inherit"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span> */}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-inherit md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg- rounded md:bg-transparent md:text-Green md:p-0 dark:text-white md:dark:text-Green"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="sections"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Green md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Section 8 Notice/ section 21 Notice
                </a>
              </li>
              <li>
                <a
                  href="court"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:md:hover:text-Green md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Court Stage
                </a>
              </li>
              <li>
                <a
                  href="bailiff"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:md:hover:text-Green md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white text-white md:dark:hover:bg-transparent"
                >
                  Bailiff Stage
                </a>
              </li>
              <li>
                <a
                  href="dept_recovery"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:md:hover:text-Green md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white text-white md:dark:hover:bg-transparent"
                >
                  DeptRecovery
                </a>
              </li>

              <li className="flex">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="    focus:outline-none  font-semibold rounded-lg text-md  px-3   text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 md:hover:text-Green text-white dark:focus:ring-blue-800"
                  type="button"
                >
                  Customer Area{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdown"
                  class="z-10 hidden bg-black divide-y divide-Green rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-Green text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="landlord"
                        class="block px-4 py-2 hover:bg-Green text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        LandLord-Advice
                      </a>
                    </li>
                    <li>
                      <a
                        href="rent-protection"
                        class="block px-4 py-2 hover:bg-Green text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Rent-Protection
                      </a>
                    </li>
                    <li>
                      <a
                        href="about"
                        class="block px-4 py-2 hover:bg-Green text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact"
                        class="block px-4 py-2 hover:bg-Green text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <CiShoppingCart className="text-3xl text-white md:hover:text-Green" />
              </li>
              <li>
               
              </li>

              {/* .... */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
