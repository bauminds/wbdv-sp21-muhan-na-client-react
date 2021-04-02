import React, {useState} from 'react'
import ActionTypes from "./action-types";

const ListWidget = ({widget, editing, setWidget, deleteWidget, updateWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return(
        <>
            {
                editing &&
                <>
                    <ActionTypes widget={cachedWidget}
                                setWidget={setCachedWidget}/>
                    <br/>
                    <input checked={cachedWidget.ordered} type="checkbox"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               ordered: !cachedWidget.ordered
                           })}
                           /> Ordered
                    <br/>
                    <textarea value={cachedWidget.text} rows={10} className="form-control"
                              onChange={e => setCachedWidget({
                                  ...cachedWidget,
                                  text: e.target.value
                              })}/>

                    <i onClick={() => deleteWidget(cachedWidget.id)}
                       className="fas fa-trash btn btn-sm float-right"/>
                    <i onClick={() => {
                        updateWidget(cachedWidget.id, cachedWidget)
                        setWidget({})
                    }}
                       className="fas fa-check btn btn-sm float-right"/>
                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn btn-sm float-right"/>
                    {
                        !cachedWidget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        cachedWidget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                </>
            }
        </>
    )
}

export default ListWidget