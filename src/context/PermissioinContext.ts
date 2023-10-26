import React from 'react';

export type PermissionContextValueType = {
	hasPermission: (permission: string) => boolean;
};

const defaultValue: PermissionContextValueType = {
	hasPermission: (p) => false,
};

const PermissioinContext = React.createContext<PermissionContextValueType>(defaultValue);

export default PermissioinContext;
