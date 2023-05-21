import {useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY, LIST_COLORS } from '../../config'
// import notFoundIcon from '../../assets/not-found.svg'
import cross from '../../assets/cross.svg'
import css from './TaskDetail.module.scss'

const TaskDetail = (props) => {
	const {pathname} = useLocation()
	const {tasks, setTasks} = props
	const taskID = pathname.slice(7)
// TODO: найти более динамичный способ для извлечения id из path
	const task = tasks.find(task => task.id === taskID)
	let visible = true
	const [descriptions, setDescriptions] = useState({
		description: '',
		visible: visible
	})

	const handleEdit = () => {
		setDescriptions({...descriptions, visible: !visible})
	}

	const handleChange = e => {
		setDescriptions({...descriptions, description: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setTasks([...tasks, task.description = descriptions.description])
		setDescriptions({...descriptions, visible: true})
	}

	return (
		<div className={css.wrapper}>
			{task ? (
				<>
					<div className={css.header}>
						<h2 className={css.title}>{task.title}</h2>
						<Link to='/'><img src={cross} alt="" /></Link>
					</div>
					{descriptions.visible ?
					<p onClick={handleEdit}>{task.description || 'This task has no description'}</p> :
					<form onSubmit={handleSubmit}>
						<textarea onChange={handleChange}>{task.description || 'This task has no description'}</textarea>
						<button type='submit'>save</button>
					</form>
					}
				</>
			) : (
				<>
					<Link to='/'><img src={cross} alt="" /></Link>
					<h2>Task with ID {taskID} not found</h2>
				</>

			)}


		</div>
	)
}

export default TaskDetail
