//import React from 'react'
//
//const HeadingWidget = ({widget, editing}) => {
//    return(
//        <>
//            {
//                editing &&
//                    <>
//                        <input value={widget.text} className="form-control"/>
//                        <select value={widget.size} className="form-control">
//                            <option value={1}>Heading 1</option>
//                            <option value={2}>Heading 2</option>
//                            <option value={3}>Heading 3</option>
//                            <option value={4}>Heading 4</option>
//                            <option value={5}>Heading 5</option>
//                            <option value={6}>Heading 6</option>
//                        </select>
//                    </>
//            }
//            {
//                !editing &&
//                    <>
//                        {widget.size === 1 && <h1>{widget.text}</h1>}
//                        {widget.size === 2 && <h2>{widget.text}</h2>}
//                        {widget.size === 3 && <h3>{widget.text}</h3>}
//                        {widget.size === 4 && <h4>{widget.text}</h4>}
//                        {widget.size === 5 && <h5>{widget.text}</h5>}
//                        {widget.size === 6 && <h6>{widget.text}</h6>}
//                    </>
//            }
//        </>
//    )
//}
//
//export default HeadingWidget

import React, {useState} from 'react'
import ActionTypes from "./action-types";

const HeadingWidget = ({widget, editing, updateWidget, deleteWidget, setWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return(
        <>
            {
                editing &&
                    <>
                        <ActionTypes widget={cachedWidget}
                                    setWidget={setCachedWidget}/>
                        <br/>
                        <div>
                            <input value={cachedWidget.text} className="form-control"
                                   onChange={e => setCachedWidget({
                                       ...cachedWidget,
                                       text: e.target.value
                                   })}
                            />
                        </div>
                        <br/>
                        <select value={cachedWidget.size} className="form-control"
                                onChange={e => setCachedWidget({
                                    ...cachedWidget,
                                    size: e.target.value
                                })}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>

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
                    <>
                        <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn float-right"/>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </>
            }
        </>
    )
}

export default HeadingWidget