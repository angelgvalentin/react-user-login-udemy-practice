import React from "react";
import Card from "./UI/Card";
import style from "./Users.module.css";

const Users = (props) => {
    const users = props.data;

    return (
        <Card className={style.users}>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default Users;
