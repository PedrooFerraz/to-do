import React from "react";


function Header(props){

    return(
        <div className="header">
            <h1>To-Do List</h1>
            <button className="addBtn" onClick={props.onButtonClick}>+</button>
        </div>
    )
}

export default Header