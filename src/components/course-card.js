import React, {useState}  from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title
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

        const deleteACourse = (course) => {
            deleteCourse(course)
            setEditing(false)
        }

        return (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card">
              <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="card-title">
                    {
                        !editing &&
                            <h5>{title}</h5>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }
                </div>

                <p className="card-text">Some description
                  content.</p>
                  <img src={``}/>
                <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                    {course.title}
                </Link>
                {editing && <i onClick={() => deleteACourse(course)} className="fas fa-times float-right"></i>}
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check float-right"></i>}
              </div>
            </div>
          </div>
        )
    }

export default CourseCard
