import React from 'react';
import "./CommentDate.css"

const CommentDate = (props) => {
    const commentDate = props.date
    const month = commentDate.toLocaleString('en-US', { month: 'long' })
    const day = commentDate.toLocaleString('en-US', { day: '2-digit' })
    const year = commentDate.getFullYear()
    return (
        <div className="comment-date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
};

export default CommentDate;