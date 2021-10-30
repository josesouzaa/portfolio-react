import React from "react";
import CoursesCard from "../../components/coursesCard";
import { useCourses } from "../../context/globalContext";
import { EducationObject } from "./styles";

const Education = () => {
  const { Courses } = useCourses();

  return (
    <EducationObject id="educacao" data-section="educacao">
      <div className="container">
        <h1>Educação</h1>
        <div>
          {Courses.map((course) => (
            <CoursesCard
              key={`${course.title} ${course.inst}`}
              status={course.status}
              title={course.title}
              inst={course.inst}
              resumo={course.resumo}
              img={course.img}
            />
          ))}
        </div>
      </div>
    </EducationObject>
  );
};

export default Education;
