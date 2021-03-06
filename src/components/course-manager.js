import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
  state = {
    courses: []
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)

          // courses: prevState.courses.map(c => {
          //   if(c._id === course._id) {
          //     return course
          //   } else {
          //     return c
          //   }
          // })
        })))
  }

  componentDidMount = () =>
    // findAllCourses()
    //     .then(actualCourses => this.setState({
    //       courses: actualCourses
    //     }))
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = (newCourseTitle) => {
    const newCourse = {
      title: newCourseTitle,
      owner: "Me",
      lastModified: "2/5/2021"
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
          // const newCourses = this.state.courses
          //     .filter(course => course !== courseToDelete)
          // this.setState({
          //   courses: newCourses
          // })
          // this.setState((prevState) => {
          //   // let nextState = {...prevState}
          //   // nextState.courses =
          //   //     prevState
          //   //         .courses
          //   //         .filter(course => course !== courseToDelete)
          //
          //   let nextState = {
          //     ...prevState,
          //     courses: prevState.courses.filter
          //               (course => course !== courseToDelete)
          //   }
          //
          //   return nextState
          // })

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  render() {
    return(
      <div>
        <Route path="/courses/table" exact={true}>
          <CourseTable
              addCourse={this.addCourse}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid" exact={true}>
          <CourseGrid
              addCourse={this.addCourse}
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
          {/*<Route path="/courses/editor">*/}
          {/*    <CourseEditor/>*/}
          {/*</Route>*/}
          {/*<Route path="/courses/editor"*/}
          {/*       render={(props) => <CourseEditor props={props}/>}>*/}
          {/*</Route>*/}
        <Route path={[
            "/courses/:layout/edit/:courseId",
            "/courses/:layout/edit/:courseId/:moduleId",
            "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
            "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId",
            "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId"

//            "/courses/editor/:courseId",
//            "/courses/editor/:courseId/:moduleId",
//            "/courses/editor/:courseId/:moduleId/:lessonId",
//            "/courses/editor/:courseId/:moduleId/:lessonId/:topicId"
        ]}
               exact={true}
               render={(props) => <CourseEditor {...props}/>}>
        </Route>
      </div>
    )
  }
}

export default CourseManager
