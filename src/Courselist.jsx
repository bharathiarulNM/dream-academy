
import Course from "./Course";
import useFetch from "./useFetch";
function Courselist({searchTerm}) {
  const[courses,error,loading]=useFetch("https://dream-academy-json.onrender.com/courses")

  // courses.sort((x,y)=>x.price-y.price)
  const LowPriceCourse = courses.filter((course) => 
    course.price <= 1000 &&
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CoursesList = LowPriceCourse.map((course) => (
    <Course
      key={course.id}
      image={course.image}
      name={course.name}
      price={course.price}
      con={course.con}
      id={course.id}
    />
  ));

  return (
 <center>
   <div>
    {loading&&<p>Loading....</p>}
    {error&&<p className="error">{error}</p>}
    {!error&&!loading&&!CoursesList&&<p>No Courses Found</p>}
    {!loading&&!error&&CoursesList}
  </div>
 </center>)
}
export default Courselist;
