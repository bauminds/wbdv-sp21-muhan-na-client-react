import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  add(id) {
//    this.addCourse(this.props.document.getElementById("newCourseTitle").value)
    this.props.addCourse(document.getElementById(id).value)
    document.getElementById(id).value=""
  }

  render() {
    return(
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
                      <i onClick={() => this.add("newCourseTitle")} className="fas fa-2x fa-plus"></i>
                      <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                      </Link>
                  </div>
              </div>
          </div>

          <div className="row table-styling">
              <div className="col-6 d-md-block"><b>Title</b></div>
              <div className="col-2 d-none d-sm-block"><b>Owned by</b></div>
              <div className="col-1 d-none d-md-block"><b>Last Modified By</b></div>
              <div className="col-3 d-block">
                  <i className="fas fa-2x fa-folder float-right"></i>
                  <i className="fas fa-2x fa-sort-alpha-down float-right"></i>
                  <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                  </Link>
              </div>
          </div>

        <table className="table">
          <tbody>
          {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
          {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
          {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
          {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}