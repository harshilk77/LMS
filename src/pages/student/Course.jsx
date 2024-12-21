import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Course = () => {
     return (
          <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:transition-all duration-300 cursor-pointer">
               <div className="relative">
                    <img
                         src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
                         alt=""
                         className="w-full h-36 object-cover rounded-t-lg"
                    />
               </div>
               <CardContent>
                    <h2
                         className="text-2xl font-bold text-gray-800 dark:text-gray-100 
                                                       cursor-pointer hover:text-blue-500 transition-colors duration-300 mt-2"
                    >
                         Next.js Course
                    </h2>
                    <div className="flex items-center justify-between mt-2"></div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <img
              src="https://avatars.githubusercontent.com/u/6764390?s=200&v=4"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-600 dark:text-gray-300">John Doe</span>
                      </div>
              <Badge className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ">
                Beginner
              </Badge>
          {/* <span className="text-gray-500 dark:text-gray-400">12 Lessons</span> */}
        </div>
        <p className="text-black dark:text-gray-300 mt-3 text-lg">
          $14
        </p>
      </CardContent>
    </Card>
  );
};

export default Course;
