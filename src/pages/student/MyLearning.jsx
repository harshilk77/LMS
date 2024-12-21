import Course from "./Course"

const MyLearning = () => {
     const isLoading = true
     const myLearning = [1,2,3]
     
     return (
       <div className="max-w-4xl mx-auto my-10 px-4 py-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-center">My Learning</h1>
            <div className="my-6">
                    {isLoading ? (
                         <MyLearningSkeleton />
                    ) : myLearning.length === 0 ? (
                         <p>You are not enrolled in any course.</p>
                    ) : (
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                             { [1,2,3].map((course, index) => (
                                   <Course key={index}  />
                              ))}
                         </div>
                    )}
            </div>
            
            {/* Add your learning components here */}
               {/* Example: */}
            {/* <MyLearningComponent /> */}
            
            
    </div>
  )
}

export default MyLearning

const MyLearningSkeleton = () => (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
               <div
                    key={index}
                    className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
               ></div>
          ))}
     </div>
);

