import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskScheduler() {
    return (
        <div className='Task-scheduler-container'>
            Select Date:
            <DatePicker/>
        </div>
    );
}

export default TaskScheduler;
