import { useState } from 'react';
import { Link } from 'react-router-dom'

import './Card.css';

import TaskItem from './TaskItem/TaskItem';
import TaskInput from './TaskInput/TaskInput';
import TaskSelect from './TaskSelect/TaskSelect';
import Button from './Button/Button';

import { BtnAdd } from './Button/icons/BtnAdd';
import { BtnRemove } from './Button/icons/BtnRemove';


function Card(props) {
    const { cardName, status, tasks, changeTasks } = props;
    
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [showInput, setShowInput] = useState(false);
    
    let submitTask = () => {
        setShowInput(prev => !prev);
        if(inputValue.length === 0) return;
        changeTasks.addTask(inputValue.substring(0, 100));
        setInputValue('');
    }

    let submitSelect = () => {
        setShowInput(prev => !prev);
        if(selectValue === '') return;
        changeTasks.addSelect(selectValue, status);
    }

    return (
        <div className='card'>
            <span className='cardName'>{cardName}</span>

            {tasks.map(task => {
                return (
                    <div className='taskItem'>
                        <Link to={`/tasks/${task.id}`}>
                                <TaskItem 
                                    key={task.id} 
                                    className='taskCard' 
                                    task={task.name}
                                />
                        </Link>
                        <Button 
                            btnClass={'buttonRemove'}
                            btnName={''}
                            btnIcon={<BtnRemove/>}
                            onClick={() => changeTasks.removeTask(task.id)}
                        />
                    </div>
                )
            })
            }

            {status === 'BACKLOG'? 
                showInput && <TaskInput
                    inputValue={inputValue} 
                    onChange={(e) => {setInputValue(e.target.value)}}
                /> :
                showInput && <TaskSelect
                    options={changeTasks.getSelect(status.toLowerCase())}
                    selectClass=''
                    onChange={(e) => setSelectValue(e.target.value)}
                />
            }

            <Button 
                btnClass={showInput? 'buttonSub' : 'buttonAdd'}
                btnName={showInput? 'Submit' : 'Add task'}
                disabled={
                    changeTasks.getSelect(status.toLowerCase()).length == 0 && status !== 'BACKLOG'? 
                    true : 
                    false
                }
                btnIcon={showInput? '' : <BtnAdd/>}
                onClick={status === 'BACKLOG'? submitTask : submitSelect}
            />
        </div>
    )
}

export default Card;