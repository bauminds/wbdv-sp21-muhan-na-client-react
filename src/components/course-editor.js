import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
  <div>
    <h2>
        <i onClick={() => history.goBack()}
           className="fas fa-arrow-left"></i>
        Course Editor
          <Link to="/">
            <i className="fas fa-home float-right"></i>
          </Link>
        {/*<i onClick={() => props.history.goBack()}*/}
        {/*   className="fas fa-times float-right"></i>*/}
    </h2>

      <div class="container">
          <div class="row editor">
              <div class="col-4 heading-styling">
                  <i class="fas fa-2x fa-times float-left signInline"></i><h4 class="inline">CS5610 - WebDev</h4>
                  <ul class="list-group">
                      <li class="list-group-item module-styling">Module 1 - jQuery<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling">Module 2 - React<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling">Module 3 - Redux<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling">Module 4 - Native<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling">Module 5 - Angular<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling">Module 6 - Node<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling">Module 7 - Mongo<i class="fas fa-times float-right"></i></li>
                      <li class="list-group-item module-styling"><i class="fas fa-plus float-right"></i></li>
                  </ul>
              </div>

              <div class="col-8">
                  <ul class="nav nav-tabs">
                      <li class="nav-item">
                          <a class="nav-link active tag-styling" aria-current="page" href="#">Build</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link tag-styling" href="#">Pages</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link tag-styling" href="#">Theme</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link tag-styling" href="#">Store</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link tag-styling" href="#">Apps</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link tag-styling" href="#">Settings</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link tag-styling" href="#"><i class="fas fa-plus"></i></a>
                      </li>
                  </ul>

                  <br/>
                  <div class="contentContainer">
                      <ul class="nav nav-pills">
                          <li class="nav-item">
                              <a class="nav-link pill-styling" aria-current="page" href="#">Topic 1</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link pill-styling" href="#">Topic 2</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link pill-styling" href="#">Topic 3</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link pill-styling" href="#">Topic 4</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link pill-styling" href="#"><i class="fas fa-plus"></i></a>
                          </li>
                      </ul>

                      Content intentionally left blank
                  </div>
              </div>
          </div>
      </div>
  </div>

export default CourseEditor
