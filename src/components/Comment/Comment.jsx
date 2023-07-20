import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import CommentDate from '../CommentDate/CommentDate'
import "./Comment.css"

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo
                url={props.data.avatarUrl}
                name={props.data.userName}
            />
            <div className="comment-text">
                {props.data.commentText}
            </div>
            <CommentDate date={props.data.commentDate}/>
        </div>
    );
};

export default Comment;