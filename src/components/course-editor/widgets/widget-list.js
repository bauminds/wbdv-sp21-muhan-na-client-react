import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import widgetService from "../../../services/widget-service"
import WidgetActions from "../../../actions/widget-actions"



const WidgetList = (
    {
        widgets = [],
        createWidgetForTopic,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }
    ) => {
    const {topicId} = useParams();
//    const [widgets, setWidgets] = useState(widgets)
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            {/*<h2>Widget List ({widgets.length}) {editingWidget.id}</h2>*/}
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}
                                setWidget={setEditingWidget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>
    )
}


const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidgetForTopic: (topicId) => WidgetActions.createWidgetForTopic(dispatch, topicId),
        updateWidget: (widgetId, widget) => WidgetActions.updateWidget(dispatch, widgetId, widget),
        deleteWidget: (widgetId) => WidgetActions.deleteWidget(dispatch, widgetId),
        findWidgetsForTopic: (topicId) => WidgetActions.findWidgetsForTopic(dispatch, topicId)
    }
}

export default connect(stpm, dtpm)(WidgetList)


//import React, {useState, useEffect} from 'react'
//import HeadingWidget from "./heading-widget";
//import ParagraphWidget from "./paragraph-widget";
//import {useParams} from "react-router-dom";
//
//const WidgetList = () => {
//    // TODO: move state management to widgets-reducer.js
//    const {topicId} = useParams();
//    const [widgets, setWidgets] = useState([])
//    const [editingWidget, setEditingWidget] = useState({});
//    useEffect(() => {
//        // TODO: move server communication to widget-service.js
//         fetch("http://localhost:8080/api/widgets")
////        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
//            .then(response => response.json())
//            .then(widgets => setWidgets(widgets))
//    }, [])
//    const createWidgetForTopic = () => {
//        // TODO: move server communication to widget-service.js
//        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
//            method: "POST",
//            body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
//            headers: {
//                'content-type': 'application/json'
//            }
//        })
//            .then(response => response.json())
//            .then(actualWidget => {
//                setWidgets(widgets => ([...widgets, actualWidget]))
//            })
//    }
//    const deleteWidget = (wid) =>
//         fetch(`http://localhost:8080/api/widgets/${wid}`, {
//             method: "DELETE",
//         }).then(response => {
//             setWidgets((widgets) => widgets.filter(w => w.id !== wid))
//         })
//     const updateWidget = (wid, widget) =>
//         fetch(`http://localhost:8080/api/widgets/${wid}`, {
//             method: "PUT",
//             body: JSON.stringify(widget),
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }).then(response => {
//             setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
//             setEditingWidget({})
//         })
//
//    return(
//        <div>
//            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
//            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
//                        <ul className="list-group">
//                            {
//                                widgets.map(widget =>
//                                <li className="list-group-item" key={widget.id}>
//                                    {
//                                        editingWidget.id === widget.id &&
//                                            <>
//                                                <i onClick={() => {
//                                                    updateWidget(widget.id, editingWidget)
//                                                }} className="fas fa-2x fa-check float-right"></i>
//                                                <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
//                                            </>
//                                    }
//                                    {
//                                        editingWidget.id !== widget.id &&
//                                        <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
//                                    }
//                                    {
//                                        widget.type === "HEADING" &&
//                                        <HeadingWidget
//                                            editing={editingWidget.id === widget.id}
//                                            widget={widget}/>
//                                    }
//                                    {
//                                        widget.type === "PARAGRAPH" &&
//                                        <ParagraphWidget
//                                            editing={editingWidget.id === widget.id}
//                                            widget={widget}/>
//                                    }
//                                </li>
//                                )
//                            }
//                        </ul>
//            {JSON.stringify(widgets)}
//        </div>
//    )
//}
//
//export default WidgetList;