import React from "react";
import Card from "./Card";

function List(props) {

    return (

        <ul>
            {props.items.map((item) =>
                <li key={item.id}>
                    <Card className={item.done ? "done item" : "item"}>
                        {item.text}
                        <div className="btn-group">
                            <button className={item.done ? "item-btn doneBtn" : "item-btn"} onClick={() => { props.onDone(item) }}><i class="fa-solid fa-check"></i></button>
                            <button className="item-btn" onClick={() => { props.onItemDeleted(item) }}><i class="fa-solid fa-x"></i></button>
                        </div>
                    </Card>
                </li>
            )}
        </ul>

    )
}


export default List;