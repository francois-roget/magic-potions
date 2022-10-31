import * as React from 'react';
import { User } from '../types';

type Props = {
	currentUser?: User;
	logOut: () => void;
};

const Header: React.FC<Props> = ({ currentUser, logOut }) => (
	<nav className="navbar navbar-expand navbar-dark bg-primary">
		<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			<a className="navbar-brand" href="#">
				Potions
			</a>
			<span className="navbar-nav mr-auto mt-2 mt-lg-0"></span>
			{currentUser && (
				<p className="navbar-text navbar-right" style={{ marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}>
					Signed in as {currentUser.name}
					<button className="btn ml-2 btn-outline-warning" onClick={logOut}>
						Log Out
					</button>
				</p>
			)}
		</div>
	</nav>
);

export default Header;
