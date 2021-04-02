import React, {useState} from 'react'
import ActionTypes from "./action-types";

const ParagraphWidget = ({widget, editing, setWidget, deleteWidget, updateWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return(
        <>
            {
                editing &&
                <>
                    <ActionTypes widget={cachedWidget}
                                setWidget={setCachedWidget}/>
                    <br/>
                    <textarea value={cachedWidget.text} className="form-control"
                              onChange={e => setCachedWidget({
                                  ...cachedWidget,
                                  text: e.target.value
                              })}
                                >
                    </textarea>

                    <i onClick={() => deleteWidget(cachedWidget.id)}
                       className="fas fa-trash btn float-right"/>
                    <i onClick={() => {
                        updateWidget(cachedWidget.id, cachedWidget)
                        setWidget({})
                    }}
                       className="fas fa-check btn float-right"/>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn float-right"/>
                </p>
            }
        </>
    )
}

export default ParagraphWidget