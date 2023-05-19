import {LIST_TYPES, LIST_COPY} from '../../config'
import css from './Footer.module.scss'

function Footer(props) {
	return (
		<footer className={css.footer}>
			<div className={css.active}>Active tasks: </div>
			<div className={css.finished}>Finished tasks: </div>
			<div className={css.by}>Kanban board by <a href='https://github.com/ElviraBikmetova' target='_blank' rel='noreferrer'>@ElviraBikmetova</a>, 2023</div>
		</footer>
	)
}

export default Footer
