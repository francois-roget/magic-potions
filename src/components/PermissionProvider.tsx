import * as React from 'react';
import { PropsWithChildren } from 'react';
import PermissioinContext, { PermissionContextValueType } from '../context/PermissioinContext';

type Props = PropsWithChildren & {
	permissions: string[];
};

const { Provider } = PermissioinContext;

const PermissionProvider: React.FC<Props> = (props) => {
	const { permissions, children } = props;

	const value: PermissionContextValueType = {
		hasPermission: (p: string) => permissions.includes(p),
	};

	return <Provider value={value}>{children}</Provider>;
};

export default PermissionProvider;
