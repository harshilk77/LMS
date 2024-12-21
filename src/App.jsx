import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/Mylearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
// import AddCourse from "./pages/admin/course/AddCourse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* Add other page components */}
            <Courses />

          </>
        ),
      },
      // Add more routes as needed
      {
        path: "/login",
        element: <Login />,
      },
      // Add more routes as needed
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      // Add more routes as needed
      {
        path: "profile",
        element: <Profile />,
      },
      // admin routes added to the routes
      {
        path: "admin",
        element: <Sidebar />,
        children: [
         
          // Add more admin routes as needed
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
//           {
//             path: "course/create",
//             element:<AddCourse/>
// }
          
        ],
      }

    ],
  },
]);
function App() {
  return (
    <main>
      <RouterProvider
        router={appRouter}

      />
    </main>
  );
}

export default App;
