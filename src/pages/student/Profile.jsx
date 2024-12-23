import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import Course from "./Course";

const Profile = () => {
     const isLoading = false;
     const enrolledCourses = [1,2]
  return (
    <div className="max-w-4xl mx-auto my-10 px-4 py-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center md:text-left">
        Profile
      </h1>

      <div className="flex flex-col md:flex-row items-center  md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
            <AvatarImage
              src="https://github
.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                Name:
                                
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Harshil Kanani
              </span>
            </h2>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Email:
                                <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                                     
                Harshil@gmail.com
              </span>
            </h2>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Role:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                instructor
              </span>
            </h2>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make a new profile and add it to your account and update your
                  profile.
                </DialogDescription>
              </DialogHeader>
              <div className="gird gap-4 py-4">
                <div className="gird grid-cols-4 items-center gap-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:border-gray-700 dark:focus:border-blue-400"
                  />
                </div>
                <div className="gird grid-cols-4 items-center gap-4">
                  <label
                    htmlFor="file"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    name="file"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:border-gray-700 dark:focus:border-blue-400"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading} className="mr-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses you're enrolled in</h1>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
                      {
                           enrolledCourses.length === 0 ? <h1>
                                You haven't enrolled yet
                           </h1> : (
                                   enrolledCourses.map((course, index) => (
                                         <Course key={index} />
                                   )
                           ))
                      }

        </div>
      </div>
    </div>
  );
};

export default Profile;
