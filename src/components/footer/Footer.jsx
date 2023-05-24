import {LIST_TYPES} from '../../config'
import css from './Footer.module.scss'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.classNums}>
				<div>Active tasks:
					{' ' + tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length}
				</div>
				<div>Finished tasks:
					{' ' + tasks.filter(task => task.status === LIST_TYPES.FINISHED).length}
				</div>
			</div>
			<div className={css.by}>
				Kanban board by
				<a href='https://github.com/ElviraBikmetova' target='_blank' rel='noreferrer'> @ElviraBikmetova</a>, 2023
			</div>
		</footer>
	)
}

export default Footer
