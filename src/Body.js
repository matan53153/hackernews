import React from "react"

function Body(props) {
    return (
    <div className="Container">
        <p className="Title">{props.title}</p>
        <div className="BelowTitle">
            <span>{props.points} points | </span>
            <span>{props.author} | </span>
            <span>{props.comments} comments | </span>
            <span>({props.url})</span>
        </div>
    </div>)
}

export default Body