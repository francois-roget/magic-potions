import { User } from '../../types';
import * as React from 'react';

type Props = {
	user: User;
	onClick: () => void;
};

const LoginItem: React.FC<Props> = ({ user, onClick }) => (
	<div className="card col-4">
		<img src={user.photo} className="card-img-top" alt={user.name} />
		<div className="card-body">
			<h5 className="card-title">{user.name}</h5>

			<button onClick={onClick} className="btn btn-primary">
				Login
			</button>
		</div>
	</div>
);

export default LoginItem;
