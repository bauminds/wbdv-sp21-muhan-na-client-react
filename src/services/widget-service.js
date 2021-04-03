//const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/modules";
//const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/courses";
//const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/lessons";
//const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/topics";
//const WIDGETS_URL = "https://wbdv-generic-server.herokuapp.com/api/001400298/widgets";

//const TOPICS_URL = "https://wbdv-sp21-muhan-na-react.herokuapp.com/api/topics";
//const WIDGETS_URL = "https://wbdv-sp21-muhan-na-react.herokuapp.com/api/widgets";

const TOPICS_URL = "http://localhost:8080/api/topics";
const WIDGETS_URL = "http://localhost:8080/api/widgets";

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())

export default {
    createWidgetForTopic, updateWidget, deleteWidget, findWidgetsForTopic
}