import React from "react";

const CreateUser = ({ username, email, onCreate, onChange }) => {
    return (
        <div>
            <input
                name="username"
                placeholder="사용자 이름"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;