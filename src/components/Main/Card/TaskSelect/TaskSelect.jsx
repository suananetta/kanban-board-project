
import './TaskSelect.css'

function TaskSelect({options, selectClass, onChange}) {
    return (
        <select name="taskSelect" className={selectClass} onChange={onChange}>
            <option value=''>Available tasks:</option>
            
            {options.map(task => {
                return (
                    <option key={task.id} value={task.name}>{task.name}</option>
                )
            })}
        </select>
    )
}

export default TaskSelect;