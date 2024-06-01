import { useState } from "react";
import Course from "./Course";

export default function Menu() {
  const [Courses, setCourses] = useState([
    { CourseName: "", Grade: "A+", Credits: 3 },
    { CourseName: "", Grade: "D+", Credits: 3 },
    { CourseName: "", Grade: "A+", Credits: 3 },
  ]);
  const [GPA, setGPA] = useState(0);

  const Grades = {
    "A+": 5,
    A: 4.75,
    "B+": 4.5,
    B: 4,
    "C+": 3.5,
    C: 3,
    "D+": 2.5,
    D: 2,
    F: 1,
  };

  function handleOnChange(e, index) {
    const newCourses = Courses.map((course, i) => {
      if (i === index) {
        return { ...course, [e.target.name]: e.target.value };
      }
      return course;
    });
    setCourses(newCourses);
  }

  const CoursesList = Courses.map((course, index) => (
    <div key={index}>
      <Course
        courseName={course.CourseName}
        Grade={course.Grade}
        Credits={course.Credits}
        change={(e) => handleOnChange(e, index)}
      />
    </div>
  ));

  function handleAddCourse() {
    setCourses([...Courses, { CourseName: "", Grade: "A+", Credits: 3 }]);
  }

  function handleCalc() {
    let totalPoints = 0;
    let totalCredits = 0;
    for (let c of Courses) {
      let Credit = Number(c.Credits);
      totalPoints += Grades[c.Grade] * Credit;
      totalCredits += Credit;
    }
    let calculation = totalPoints / totalCredits;
    setGPA(calculation.toFixed(2));
  }

  const mainDivStyle =
    "flex justify-center align-middle flex-col w-fit mx-auto mt-8";
  const addCourseStyle =
    "w-fit mx-auto bg-teal-500 p-3 font-bold text-white rounded-lg";
  const calcStyle =
    "w-fit mx-auto bg-red-600 p-3 font-bold text-white rounded-lg mt-6";

  return (
    <div className={mainDivStyle}>
      {CoursesList}
      <button onClick={handleAddCourse} className={addCourseStyle}>
        Add Course!
      </button>
      <button onClick={handleCalc} className={calcStyle}>
        Calc
      </button>
      <p className={"w-fit mx-auto"}>معدلك هو : {GPA}</p>
    </div>
  );
}
