import React from 'react'
import {Link, useParams, Route} from "react-router-dom";

import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills"
import WidgetList from "./widgets/widget-list"
import widgetReducer from "../../reducers/widget-reducer"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId, lessonId, widgetId} = useParams();
    return (
    <Provider store={store}>
        <div>
            <h2>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Name

                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <div className="lesson-tabs-styling">
                        <LessonTabs/>
                    </div>
                    <div className="topic-pills-styling">
                        <TopicPills/>
                    </div>
                    <div>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)}

export default CourseEditor
