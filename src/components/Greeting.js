import { useState } from "react";

const Greeting = ({name}) => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText((prevState) => !prevState);
    }

    return (
        <div>
        <h1>Hello, {name}!</h1>
        <button onClick={changeTextHandler}>Change Text</button>
        <p>{changedText ? "Text Changed!" : "Text Not Changed!"}</p>
        </div>
    );
};

export default Greeting;