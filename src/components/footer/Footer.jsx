import {LIST_TYPES} from '../../config'
import css from './Footer.module.scss'

function Footer(props) {
	const {tasks} = props
	console.log(Object.values(LIST_TYPES));
	return (
		<footer className={css.footer}>
			<div className={css.active}>Active tasks:
				{tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length}
			</div>
			<div className={css.finished}>Finished tasks:
			{tasks.filter(task => task.status === LIST_TYPES.FINISHED).length}</div>
			<div className={css.by}>Kanban board by <a href='https://github.com/ElviraBikmetova' target='_blank' rel='noreferrer'>@ElviraBikmetova</a>, 2023</div>
		</footer>
	)
}

export default Footer
