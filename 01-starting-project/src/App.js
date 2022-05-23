import React, {useState} from "react";
import Form from "./components/Form";
import Users from "./components/Users";

// const usersList = [
//     {
//         name: "test",
//         age: "1",
//     },
//     {
//         name: "Test2",
//         age: "2",
//     },
// ];

function App() {
    const [users, setUsers] = useState([]);

    // const addUser = (newUser) => {
    //     setUsers((prevUsers) => {
    //         return [newUser, ...prevUsers];
    //     });
    const addUser = (uName, uAge) => {
        setUsers((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
        });
    };

    return (
        <div>
            <Form onNewUser={addUser} />
            <Users data={users} />
        </div>
    );
}

export default App;
