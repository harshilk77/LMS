import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/Mylearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";

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
        element:<Sidebar/>,
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
