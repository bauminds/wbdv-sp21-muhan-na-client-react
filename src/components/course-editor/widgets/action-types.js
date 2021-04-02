import React, {useState} from 'react'

const ActionTypes = (
    {
        widget,
        setWidget
    }) => {
    return(
        <select value={widget.type} className="form-control"
                onChange={e => setWidget({
                    ...widget,
                    type: e.target.value
                })}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"VIDEO"}>Video</option>
            <option value={"IMAGE"}>Image</option>
            <option value={"LINK"}>Link</option>
            <option value={"LIST"}>List</option>
            <option value={"HTML"}>HTML</option>
        </select>
    )
}

export default ActionTypes