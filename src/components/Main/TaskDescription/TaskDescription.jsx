import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState } from 'react';

import { IconClose } from './icons/IconClose';

import './TaskDescription.css';

function TaskDescription(props) {
    const navigate  = useNavigate();
	const { taskId } = useParams();
	const { tasks, setTasks, states } = props;

	const task = tasks.find(task => task.id === taskId);

    const [selectValue, setSelectValue] = useState(task.status)
    const [nameValue, setNameValue] = useState(task.name);
    const [descValue, setDescValue] = useState(task.description);
    const [changeVisibility, setChangeVisibility] = useState('false')

    let saveTask = (e) => {
        let newList = tasks.map(task => {
            if(task.id === taskId) {
                return {...task, 
                    description: descValue,
                    name: nameValue,
                    status: selectValue
                } }
            return task;
            })
        setTasks(newList)
        setChangeVisibility(prev => !prev)
        if(e.target.name === 'toHomePage') navigate(-1);
    } 

    let deleteTask = () => {
        if (task) {
            setTasks([...tasks.filter(item => item.id !== task.id)])
        }
        navigate(-1);
    }

    return (
        <div className='wrapper'>
            <div className='descriptionBlock'>
                <div className='taskHeader'>
                    <div className='taskName'>
                        {!changeVisibility?
                            <>
                                <textarea cols={95} maxLength={100}
                                    className='nameArea'
                                    name='name'
                                    placeholder='Enter task name (no more than 100 chars)'
                                    value={nameValue}
                                    onChange={(e) => setNameValue(e.target.value)} 
                                /> 
                                <select className='descSelect' name='status' onChange={(e) => setSelectValue(e.target.value.toLowerCase())} value={selectValue.toUpperCase()}>
                                    { Object.values(states).map(state => {
                                        return <option key={state} value={state}>{state}</option>
                                    })}
                                </select>
                            </> : 
                            <>
                                <h2>{nameValue}</h2>
                                <p>{selectValue.toUpperCase()}</p>
                            </>
                            }
                    </div>
                    <Link to='/' className='buttonClose'><IconClose/></Link>
                </div>
                
                {changeVisibility && <>
                        <p>{descValue}</p>
                        <button className='descBtns_item' onClick={() => setChangeVisibility(prev => !prev)}>Change task details</button>
                    </>
                }

                {!changeVisibility && <div className='taskDescription'>
                        <textarea rows={50}
                            className='descArea'
                            name='description'
                            placeholder='Enter task description'
                            value={descValue}
                            onChange={(e) => setDescValue(e.target.value)}
                        />
                        <div className='descBtns'>
                            <button className='descBtns_item' onClick={saveTask}>Save task</button>    
                            <button className='descBtns_item' onClick={deleteTask}>Delete task</button> 
                            <button className='descBtns_item' name='toHomePage' onClick={saveTask}>Save and close</button>
                        </div>  
                </div>}
            </div>
        </div>
    );
}

export default TaskDescription;
