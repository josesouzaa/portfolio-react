import React, { createContext, useContext } from "react";
import { CoursesList } from "./coursesApi";
import { PortfolioList } from "./portfolioApi";

export const GlobalContext = createContext();

export function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

export default function GlobalContextProvider({ children }) {
  const Courses = CoursesList;
  const Portfolio = PortfolioList;

  return (
    <GlobalContext.Provider value={{ Courses, Portfolio, debounce }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(GlobalContext);
  const { Courses } = context;
  return { Courses };
}

export function usePortfolio() {
  const context = useContext(GlobalContext);
  const { Portfolio } = context;
  return { Portfolio };
}
