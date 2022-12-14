import * as React from 'react';
import { getUsers } from './services/userService';
import PotionManagement from './pages/PotionManagement';
import LoginForm from './pages/LoginForm';
import { User } from './types';
import Header from './components/Header';
import usePersistedState from './hooks/usePersistedState';

const App: React.FC = () => {
	const [selectedUser, setSelectedUser] = usePersistedState<User | undefined>(undefined, 'selectedUser');
	const users = getUsers();
	return (
		<div className="container-fluid">
			<Header logOut={() => setSelectedUser(undefined)} currentUser={selectedUser} />
			<div className="container">
				{selectedUser ? <PotionManagement /> : <LoginForm availableUsers={users} onLogin={setSelectedUser} />}
			</div>
		</div>
	);
};

export default App;
