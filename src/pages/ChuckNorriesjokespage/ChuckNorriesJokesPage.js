import React, { useEffect, useState } from "react";
import { Banner } from "flowbite-react";
export const ChuckNorriesJokesPage = () => {
  const [jokes, setJokes] = useState("");
  useEffect(() => {
    const fetchjoke = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJokes(data.value);
    };
    fetchjoke();
  }, []);
  return (
    <>
      <Banner>
        <p className="ml-28 pt-16">
          <div className="rounded-lg border border-gray-100 bg-gray-200 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl flex justify-center">
            <div className="mb-3 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
              <span data-testid="jokeHeadline">{jokes}</span>
            </div>
          </div>
          <div className="flex justify-center p-1">
            {" "}
            <span>-api.chuckNorries.io</span>
          </div>
        </p>
      </Banner>
    </>
  );
};
