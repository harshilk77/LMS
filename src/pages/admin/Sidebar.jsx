import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden  lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-200 dark:border-gray-800 bg-[#f0f0f0] p-5 sticky top-0 h-screen">
      <div className="mt-20 space-y-8">
        <Link to="dashboard" className="flex items-center gap-2">
          <ChartNoAxesColumn size={22} />
          <h1>DashBoard</h1>
        </Link>
        {/* Add more links here */}
        <Link to="course" className="flex items-center gap-2">
          <SquareLibrary size={22} />
          <h1>Courses</h1>
        </Link>
      </div>
      <div className="flex-1 md:p-24 p-2
        bg-white dark:bg-gray-800 dark:text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
