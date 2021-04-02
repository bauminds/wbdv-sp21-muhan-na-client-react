import React, {useState} from 'react'
import ActionTypes from "./action-types";

const ImageWidget = ({widget, editing, setWidget, deleteWidget, updateWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return(
        <>
            {
                editing &&
                <>
                    <ActionTypes widget={cachedWidget}
                                setWidget={setCachedWidget}/>
                    <br/>
                    <label>Image URL</label>
                    <input type="text" value={cachedWidget.src} className="form-control image-input"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               src: e.target.value
                           })}/>
                    <label>Image Width</label>
                    <input type="text" value={cachedWidget.width} className="form-control image-input"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               width: e.target.value
                           })}/>
                    <label>Image Height</label>
                    <input type="text" value={cachedWidget.height} className="form-control image-input"
                           onChange={e => setCachedWidget({
                               ...cachedWidget,
                               height: e.target.value
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
                <p>
                    {widget.text}
                    <i onClick={() => setWidget(cachedWidget)} className="fas fa-cog btn btn-sm float-right"/>
                </p>
            }
        </>
    )
}

export default ImageWidget