import { LIST_TYPES } from '../../config';
import css from './Select.module.scss'

const SelectAddNewTask = props => {
    const {tasks} = props
    return (
        <div>
            <select className={css.select}>
                {tasks.map(task => <option value="">{task.title}</option>)}
            </select>
        </div>
     );
}

export default SelectAddNewTask;