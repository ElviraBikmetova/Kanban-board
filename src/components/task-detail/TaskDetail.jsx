import { useLocation, Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY, LIST_COLORS } from '../../config'
// import notFoundIcon from '../../assets/not-found.svg'
import cross from '../../assets/cross.svg'
import css from './TaskDetail.module.scss'

const TaskDetail = (props) => {
	const {pathname} = useLocation()
	const {tasks} = props
	const taskID = pathname.slice(7)

	const task = tasks.find(task => task.id === taskID)
	// TODO: найти более динамичный способ для извлечения id из path

	return (
		<div className={css.wrapper}>
			{task ? (
				<>
					<div className={css.header}>
						<h2 className={css.title}>{task.title}</h2>
						<Link to='/'><img src={cross} alt="" /></Link>
					</div>
					<p>This task has no description</p>
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
