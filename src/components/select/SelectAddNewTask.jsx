import { LIST_TYPES } from '../../config';
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

    return (
        <div>
            <select className={css.select} onChange={handleSelectChange} >
                <option></option>
                {filteredTasks.map(task => <option key={task.id} value={task.id} >{task.title}</option>)}
            </select>
        </div>
     );
}

export default SelectAddNewTask;