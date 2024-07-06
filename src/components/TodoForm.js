import React, { useState } from "react";

function TodoForm(props) {

    const [text, setText] = useState("");

    function getInputValue(e) {

        let t = e.target.value;
        setText(t);
    }

    function addItem(e) {

        e.preventDefault()

        if (text) {
            props.onAddItem(text)
            setText("")
        }

    }

    return (
        <div className="formContent">
            <h3 className="formTitle">{props.formTitle}</h3>
            <form className="form">
                <input className="formInput" type="text" onChange={getInputValue} value={text} maxLength={40}></input>
                <button className="formBtn" onClick={addItem}>Adicionar</button>
            </form>
        </div>
    )

}

export default TodoForm;