import uniqid from 'uniqid';

import Card from "../Card/Card";

function Board(props) {
    const { tasks, setTasks } = props;
    const { states } = props;

    const changeTasks = {
        addTask: (name, description) => {
            let newTask = {
                id: uniqid(),
                date: Date.now(),
                name: name,
                description: description || 'This task has no description',
                status: 'backlog',
            }
            setTasks([...tasks, newTask]);
        },
        getSelect: (status) => {
            let selectArr = [];
            switch(status) {
                case 'ready':
                    tasks.map(task => {
                        if(task.status === 'backlog') selectArr.push(task);
                    });
                    break;
                case 'in progress':
                    tasks.map(task => {
                        if(task.status === 'ready') selectArr.push(task);
                    });
                    break;
                case 'finished':
                    tasks.map(task => {
                        if(task.status === 'in progress') selectArr.push(task);
                    });
                    break;
                    default:
                        console.log('');
            }  
            return selectArr;
        },
        addSelect: (selectValue, status) => {
            let newStatus = status.toLowerCase();
            let newDate = Date.now();
            let newList = tasks.map(task => {
                if(task.name === selectValue) return {...task, date: newDate, status: newStatus};
                return task;
                })
            setTasks(newList);
        },
        removeTask: (id) => {
            const task = tasks.find(task => task.id === id);
            if (task) {
                setTasks([...tasks.filter(item => item.id !== task.id)])
            }
        }
    }

    return (
        <div className="cardBlock">
            {
                Object.values(states).map(state => {
                    const taskFilter = tasks.sort((a,b) => a.date-b.date)
                                            .filter(task => task.status === state.toLowerCase());
                    return (
                        <Card 
                            key={uniqid()} 
                            tasks={taskFilter || []} 
                            setTasks={setTasks}
                            changeTasks={changeTasks}
                            cardName={state} 
                            status={state}
                        />
                    )
                })
            }
        </div>
    )
}

export default Board;