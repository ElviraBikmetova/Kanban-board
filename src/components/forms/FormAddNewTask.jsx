import {useState} from 'react'
import css from './Forms.module.scss'

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible} = props
	const [values, setValues] = useState({
		title: '',
		description:''
	})

	const handleChange = e => {
		setValues({...values, title: e.target.value})
	}

	const handleSubmit = e => {
		let title = values.title.trim()
		e.preventDefault()
		if (title) {
			addNewTask(title)
		}
		setFormVisible(false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input className={css.input} id='taskTitle' type='text' value={values.title} onChange={handleChange} placeholder={'_'.repeat(30)} />
			<button className={css.submitButton} type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask
