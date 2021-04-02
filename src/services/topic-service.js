const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/modules";
const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/courses";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/topics";

//const COURSES_URL = "https://wbdv-sp21-muhan-na-react.herokuapp.com/api/courses";
//const MODULES_URL = "https://wbdv-sp21-muhan-na-react.herokuapp.com/api/modules";
//const LESSONS_URL = "https://wbdv-sp21-muhan-na-react.herokuapp.com/api/lessons";
//const TOPICS_URL = "https://wbdv-sp21-muhan-na-react.herokuapp.com/api/topics";

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export default {
    findTopicsForLesson, createTopicForLesson, updateTopic, deleteTopic
}