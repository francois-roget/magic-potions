import * as React from 'react';
import { PropsWithChildren, useContext } from 'react';
import PermissioinContext from '../context/PermissioinContext';

type Props = PropsWithChildren & {
	to: string;
};

const Restricted: React.FC<Props> = (props) => {
	const { hasPermission } = useContext(PermissioinContext);

	const { to, children } = props;
	const isAllowed = hasPermission(to);

	if (!isAllowed) {
		return null;
	}
	return <>{children}</>;
};

export default Restricted;
