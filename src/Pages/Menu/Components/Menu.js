import { useState } from "react";
import Course from "./Course/Course";
import GradeSystem from "../JSON/Grades.json";
import CourseName from "./Course/AddCourse";
import SystemSwitch from "./SystemSwitch";

export default function Menu() {
  const [gradeSystemState, setGradeSystemState] = useState("Five");
  let Grades = !gradeSystemState ? GradeSystem.Five : GradeSystem.Four;
  const [Courses, setCourses] = useState([
    { CourseName: "", Grade: "A+", Credits: 3 },
  ]);
  const [GPA, setGPA] = useState(0);

  function handleDelete(e, index) {
    const newCourses = Courses.filter((course, i) => {
      return i !== index || i === 0;
    });
    setCourses(newCourses);
  }

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
    <Course
      key={index}
      courseName={course.CourseName}
      Grade={course.Grade}
      Credits={course.Credits}
      change={(e) => handleOnChange(e, index)}
      remove={(e) => handleDelete(e, index)}
    />
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
  const addCourseStyle = "w-fit mx-auto p-3 font-bold text-white rounded-lg";
  const calcStyle =
    "w-fit mx-auto bg-red-600 p-3 font-bold text-white rounded-lg mt-6";

  return (
    <div className={mainDivStyle + " w-full flex items-center"}>
      {CoursesList}
      <button onClick={handleAddCourse} className={addCourseStyle}>
        <CourseName />
      </button>
      <SystemSwitch system={gradeSystemState} setSystem={setGradeSystemState} />
      <button onClick={handleCalc} className={calcStyle}>
        احسب
      </button>
      <p className={"w-fit mx-auto"}>معدلك هو : {GPA}</p>
    </div>
  );
}
