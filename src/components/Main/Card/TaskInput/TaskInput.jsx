import './TaskInput.css'

function TaskInput({inputValue, onChange}) {
    return (
        <input 
                type='text' 
                placeholder='Enter your task (no more than 100 chars)'
                value={inputValue} 
                onChange={onChange}
        />
    )
}

export default TaskInput;