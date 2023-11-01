import React from "react";
import { Banner } from "flowbite-react";
import logo from "../../assets/logo.png";
import "./PageNotFound.css";
export const PageNotFound = () => {
  return (
    <Banner className="banner">
      <div className="flex flex-row ">
        <div className=" pt-52 pl-96">
          <div className="mx-auto flex justify-center w-full  items-center sm:w-auto pl-48">
            <img src={logo} className="mr-3 h-10 sm:h-16" alt="logo" />
            <div>
              <p className=" text-sm text-gray-500 dark:text-gray-400">
                <span className="text-5xl">Page Not Found</span>
              </p>
            </div>
          </div>
          <div className="mx-auto flex justify-center w-full  items-center sm:w-auto">
            <span className="text-7xl">404</span>
          </div>
          <div className="mx-auto flex justify-center w-full  items-center sm:w-auto">
            try out
            <a href="/" className="font-bold text-sky-600">
              /Homepage
            </a>
            or{" "}
            <a href="/chuckNorries-jokes" className="font-bold text-sky-600">
              /jokespage
            </a>
          </div>
        </div>
      </div>
    </Banner>
  );
};
