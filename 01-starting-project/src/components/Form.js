import React, {useState} from "react";
import Card from "./UI/Card";
import classes from "./Form.module.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const [error, setError] = useState();

    const nameInputHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const ageInputHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age. (non-empty values).",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age( > 0 ).",
            });
            return;
        }

        props.onNewUser(enteredName, enteredAge);
        setEnteredName("");
        setEnteredAge("");
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onModalClose={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={nameInputHandler} value={enteredName} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageInputHandler} value={enteredAge} />
                    <Button type="submit">Add New User</Button>
                </form>
            </Card>
        </div>
    );
};

export default Form;
