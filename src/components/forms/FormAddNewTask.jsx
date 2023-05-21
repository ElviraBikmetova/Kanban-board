import {useState} from 'react'
// import clsx from 'clsx'
import css from './Forms.module.scss'

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible} = props
	const [values, setValues] = useState({title: ''	})

	const handleChange = e => {
		setValues({...values, title: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			addNewTask(values.title)
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
