import {useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
import cross from '../../assets/cross.svg'
import css from './TaskDetail.module.scss'

const TaskDetail = (props) => {
	const {pathname} = useLocation()
	const {tasks, setTasks} = props
	const index = pathname.lastIndexOf('/')
	const taskID = pathname.slice(index+1)
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
		setTasks([...tasks, task.description = descriptions.description.trim()])
		setDescriptions({...descriptions, visible: true})
	}

	return (
		<div className={css.wrapper}>
			{task ? (
				<>
					<div className={css.header}>
						<h2 className={css.title}>{task.title}</h2>
						<Link to='/'><img src={cross} alt="cross" /></Link>
					</div>
					{descriptions.visible ?
					(<>
						<p className={css.description}>{task.description || 'This task has no description'}</p>
						<button className={css.btn} onClick={handleEdit}>Edit description</button>
					</>
					) :
					<form className={css.form} onSubmit={handleSubmit}>
						<textarea className={css.textarea} onChange={handleChange}>{task.description}</textarea>
						<button className={css.btn} type='submit'>Save</button>
					</form>
					}
				</>
			) : (
				<>
					<Link to='/'><img className={css.cross} src={cross} alt="cross" /></Link>
					<h2>Task with ID {taskID} not found</h2>
				</>

			)}


		</div>
	)
}

export default TaskDetail
