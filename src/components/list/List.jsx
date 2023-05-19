import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import SelectAddNewTask from '../select/SelectAddNewTask'
import { PlusIcon } from '../../assets/plus-icon'
import css from './List.module.scss'

const List = props => {
const {title, type, tasks, addNewTask} = props
const [isFormVisible, setFormVisible] = useState(false)

const handleAddNewTask = () => {
	setFormVisible(!isFormVisible)
}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return (
				<Link to={`tasks/${task.id}`} className={css.taskLink}>
					<div key={task.id} className={css.task}>{task.title}</div>
				</Link>
				)
			})}
			{type === LIST_TYPES.BACKLOG && isFormVisible && <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />}
			{type !== LIST_TYPES.BACKLOG && isFormVisible && <SelectAddNewTask {...props}  />}
			{!isFormVisible &&
			<button className={css.addButton} onClick={handleAddNewTask}>
				<PlusIcon />
				Add card
			</button>
			}
		</div>
	)
}

export default List
