import { useLocation, Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY, LIST_COLORS } from '../../config'
// import notFoundIcon from '../../assets/not-found.svg'
import css from './TaskDetail.module.scss'

const TaskDetail = (props) => {
	const {pathname} = useLocation()
	const {tasks} = props

	const task = tasks.find(task => task.id === pathname.slice(7))
	// TODO: найти более динамичный способ для извлечения id из path

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
			</div>
			<p>This task has no description</p>

		</div>
	)
}

export default TaskDetail
