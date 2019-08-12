import React from 'react';
import './App.css';
import './TaskScheduler.css';
import Header from "./Header";
import TaskScheduler from "./TaskScheduler";

function App() {
    return (
        <div className="App">
            <Header/>
            <TaskScheduler/>
        </div>
    );
}

export default App;
