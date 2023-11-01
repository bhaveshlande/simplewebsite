import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { PageNotFound, ChuckNorriesJokesPage, WordCounterHome } from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<WordCounterHome />} />
          <Route
            path="/chuckNorries-jokes"
            element={<ChuckNorriesJokesPage />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};
