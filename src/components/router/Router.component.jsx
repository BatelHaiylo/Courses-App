import { Route, Routes } from "react-router-dom";
import {
  SignIn,
  SignUp,
  Account,
  Home,
  Courses,
  About,
  Pricing,
  Community,
  Contact,
  Profile,
  PageError,
} from "./Router";
import ProtectedRoute from "../ProtectedRoute";
import CoursesProvider from "../../context/CoursesProvider.component";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <CoursesProvider>
              <Courses />
            </CoursesProvider>
          </ProtectedRoute>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/community" element={<Community />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageError />} />
    </Routes>
  );
}
