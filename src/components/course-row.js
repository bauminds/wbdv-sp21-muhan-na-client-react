import React, {useState} from 'react'
import {Link, Route, BrowserRouter} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

// if function named delete, doesn't work, why?
    const deleteACourse = (course) => {
        deleteCourse(course)
        setEditing(false)
    }

  return (
      <div className="row row-styling">
        <div className="col-6 d-md-block tableRow">
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                    {title}
                </Link>
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </div>
        <div className="col-2 d-none d-sm-block tableRow">{owner}</div>
        <div className="col-1 d-none d-md-block tableRow">{lastModified}</div>
        <div className="col-1 d-none d-md-block tableRow">
            <Link to={`/courses/${course._id}/quizzes`}>
                Quizzes
            </Link>
        </div>
        <div className="col-2 d-block tableRow">
            <i onClick={() => deleteACourse(course)} className="fas fa-trash"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
        </div>
      </div>
  )
}
export default CourseRow
