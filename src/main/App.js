import React from 'react';
import './App.css';
import Header from "./Header";
import TaskSchedulerCalendar from "./TaskScheulerCalendar";

function App() {
    return (
        <div className="App">
            <Header/>
            <TaskSchedulerCalendar/>
        </div>
    );
}

export default App;
