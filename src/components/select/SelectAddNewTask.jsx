import css from './Select.module.scss'

const SelectAddNewTask = props => {
    const {filteredTasks, allTasks, setTasks, status, setFormVisible} = props

    const handleSelectChange = (e) => {
        const updateTasks = allTasks.map(task => {
            if (task.id === e.target.value) {
                return {...task, status: status}
            }
            return task
        })
        setTasks(updateTasks)
        setFormVisible(false)
    }

    const handleBlur = e => {
        if (!e.target.style.value) {
            setFormVisible(false)
        }
    }

    return (
        <select className={css.select} onChange={handleSelectChange} onBlur={handleBlur}>
            <option></option>
            {filteredTasks.map(task => <option key={task.id} value={task.id} >{task.title}</option>)}
        </select>
     );
}

export default SelectAddNewTask;