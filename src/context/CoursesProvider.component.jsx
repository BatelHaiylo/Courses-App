import { createContext, useState, useEffect } from "react";
import { getCourses } from "../services/Courses/getCourses";

export const coursesContext = createContext();

export default function CoursesProvider({ children }) {
  const [courses, setCourses] = useState(true);
  useEffect(() => {
    getCourses().then((res) => setCourses(res))
    // .then((res) => setLoading(false));
  }, []);

  return (
    <coursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </coursesContext.Provider>
  );
}
