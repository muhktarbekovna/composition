import React from 'react';
import Avatar from '../Avatar/Avatar';
import UserName from '../UserName/UserName';

const UserInfo = (props) => {
    return (
        <div className="userInfo">
            <Avatar url={props.url} name={props.name}/>
            <UserName name={props.name}/>
        </div>
    );
};

export default UserInfo;