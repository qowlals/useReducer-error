import React from "react";

function User({ users, onRemove, onToggle }) {

    return (
        <div>
            <b style={{
                cursor: "pointer",
                color: users.active ? "green" : "black"
            }} onClick={() => onToggle(users.id)}>
                {users.username}
            </b>
            &nbsp;
            <span>
                ({users.email})
            </span>
            <button onClick={() => onRemove(users.id)}>삭제</button>
        </div>
    )

};

function UserList({ user, onRemove, onToggle }) {
    return (
        <div>
            {user.map(
                user => <User users={user} key={user.id} onToggle={onToggle} onRemove={onRemove} />
            )}
        </div>
    );
}

export default UserList;