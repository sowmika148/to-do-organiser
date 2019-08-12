import React from "react";
import TaskCreator from "./TaskCreator";
import './TaskCreator.scss'

function TaskScheduler() {
    return (
        <div>
            <div className='Task-scheduler-container'>
                <input type="text" className="Search-Box"/>
                <button className="Button">Add Task</button>
            </div>
            <TaskCreator/>
        </div>
    );
}

export default TaskScheduler;
