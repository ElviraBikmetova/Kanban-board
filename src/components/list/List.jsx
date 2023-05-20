import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import SelectAddNewTask from '../select/SelectAddNewTask'
import { PlusIcon } from '../../assets/plus-icon'
import css from './List.module.scss'

const List = props => {
const {title, type, tasks, addNewTask, allTasks, setTasks} = props
const [isFormVisible, setFormVisible] = useState(false)

const backlogTasks = allTasks.filter(task => task.status === LIST_TYPES.BACKLOG)
const readyTasks = allTasks.filter(task => task.status === LIST_TYPES.READY)
const inProgressTasks = allTasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS)


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
			{type === LIST_TYPES.READY && isFormVisible && <SelectAddNewTask filteredTasks={backlogTasks} allTasks={allTasks} setTasks={setTasks} status={LIST_TYPES.READY} setFormVisible={setFormVisible} />}
			{type === LIST_TYPES.IN_PROGRESS && isFormVisible && <SelectAddNewTask filteredTasks={readyTasks} allTasks={allTasks} setTasks={setTasks} status={LIST_TYPES.IN_PROGRESS} setFormVisible={setFormVisible} />}
			{type === LIST_TYPES.FINISHED && isFormVisible && <SelectAddNewTask filteredTasks={inProgressTasks} allTasks={allTasks} setTasks={setTasks} status={LIST_TYPES.FINISHED} setFormVisible={setFormVisible} />}

			{!isFormVisible && type === LIST_TYPES.BACKLOG &&
			<button className={css.addButton} onClick={handleAddNewTask}>
				<PlusIcon />
				Add card
			</button>
			}

			{!isFormVisible && type === LIST_TYPES.READY && (backlogTasks.length ?
			<button className={css.addButton} onClick={handleAddNewTask}>
				<PlusIcon />
				Add card
			</button>
			:
			<button className={css.addButtonDisabled} onClick={handleAddNewTask} disabled="disabled">
			<PlusIcon />
			Add card
			</button>
			)}

			{!isFormVisible && type === LIST_TYPES.IN_PROGRESS && (readyTasks.length ?
			<button className={css.addButton} onClick={handleAddNewTask}>
				<PlusIcon />
				Add card
			</button>
			:
			<button className={css.addButtonDisabled} onClick={handleAddNewTask} disabled="disabled">
			<PlusIcon />
			Add card
			</button>
			)}

			{!isFormVisible && type === LIST_TYPES.FINISHED && (inProgressTasks.length ?
			<button className={css.addButton} onClick={handleAddNewTask}>
				<PlusIcon />
				Add card
			</button>
			:
			<button className={css.addButtonDisabled} onClick={handleAddNewTask} disabled="disabled">
			<PlusIcon />
			Add card
			</button>
			)}
		</div>
	)
}

export default List
