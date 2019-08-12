import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskCreator() {
    return(
        <div className="Task-create-container">
            Date:
            <DatePicker/>
            <br/>
            <br/>
            Task Header:
            <input type="text"/>
            <br/>
            <br/>
            Task Content:
            <textarea/>
        </div>
    )
}

export default TaskCreator;
