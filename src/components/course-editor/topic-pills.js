import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import topicService from '../../services/topic-service'
import lessonService from "../../services/lesson-service"


const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + topicId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
    <div>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/:layout/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
//                            Link to={`/courses/:layout/edit/${courseId}/${moduleId}/${lessonId}/ABC123`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (topic) =>
        topicService.deleteTopic(topic._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topic
            })),
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            }))
})

export default connect(stpm, dtpm)(TopicPills)