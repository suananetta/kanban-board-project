import './App.css';

import data from './mock.json'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React, { useEffect, useState } from 'react';

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  const states = {
    backlog: 'BACKLOG',
    ready: 'READY',
    in_progress: 'IN PROGRESS',
    finish: 'FINISHED'
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <Header logoName='Kanban Board'/>
      <Main tasks={tasks} setTasks={setTasks} states={states}/>
      <Footer tasks={tasks}/>
    </>
  );
}

export default App;
