import { useState } from 'react'
import User from '../../assets/user.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import ArrowUp from '../../assets/arrow-up.svg'
import css from './Header.module.scss'

function Header() {

	const [isAuthVisible, setAuthVisible] = useState(false)

	const handleAuth = () => {
		setAuthVisible(!isAuthVisible)
	}

	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div className={css.user} onClick={handleAuth}>
				<img src={User} alt="user" />
				{isAuthVisible ? <img src={ArrowUp} alt="arrow" /> : <img src={ArrowDown} alt="arrow" />}
			</div>
			{ isAuthVisible && (
				<div className={css.auth}>
					<p>Profile</p>
					<p>Log Out</p>
				</div>
			)}
		</header>
	)
}

export default Header
