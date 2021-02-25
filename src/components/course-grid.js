import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
   {
        addCourse,
        updateCourse,
        deleteCourse,
        courses
   }) => {
      const add = (id) => {
    //    this.addCourse(this.props.document.getElementById("newCourseTitle").value)
        addCourse(document.getElementById(id).value)
        document.getElementById(id).value=""
      }

    return (
      <div>
            <div className="wbdv-sticky-nav-bar">
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-bars fa-2x"></i>
                    </div>
                    <div className="col-2">
                        <h4>Course Manager</h4>
                    </div>
                    <div className="col-8">
                        <input
                            id="newCourseTitle"
                            className="form-control" placeholder="New Course Title"/>
                    </div>
                    <div className="col-1">
                        <i onClick={() => add("newCourseTitle")} className="fas fa-2x fa-plus"></i>
                      <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                      </Link>
                    </div>
                </div>
            </div>

            <div className="row grid-styling">
                <div className="col-5 d-none d-md-block"><b>Recent Documents</b></div>
                <div className="col-4 d-none d-md-block"><b>Owned by me</b></div>
                <div className="col-3 d-block float-right">
                   <i className="fas fa-2x fa-folder"></i>
                   <i className="fas fa-2x fa-sort-alpha-down"></i>
                   <Link to="/courses/table">
                     <i className="fas fa-list fa-2x"></i>
                   </Link>
                </div>
            </div>

        <div className="row">
        {
          courses.map(course =>
            <CourseCard
            course={course}
            title={course.title}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
            />
          )
        }
        </div>
      </div>
    )
}
export default CourseGrid
