export interface JWTAuthResponseDTO{
    tokenType?: string;
	tokenAcces?: string;
	userDTO?: UserDTO;
	ok: boolean;
}

export interface UserDTO{
    id?: number;
	name?: string;
	email?: string;
	username?: string;
	roles?: Roles;
	
}

export interface Roles {
	id?: number;
	name?: string;
}