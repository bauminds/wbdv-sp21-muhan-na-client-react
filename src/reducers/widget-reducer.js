const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            const newState1 = {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
            return newState1
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widgetId) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        default:
            return state
    }
}

export default widgetReducer