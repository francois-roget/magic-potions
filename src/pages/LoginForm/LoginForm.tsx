import * as React from 'react';
import { User } from '../../types';
import LoginItem from './LoginItem';

type Props = {
	availableUsers: User[];
	onLogin: (user: User) => void;
};

const LoginForm: React.FC<Props> = ({ availableUsers, onLogin }) => (
	<div className="row">
		{availableUsers.map((u) => (
			<LoginItem onClick={() => onLogin(u)} user={u} />
		))}
	</div>
);

export default LoginForm;
