export enum AuthTypes {
    Email,
    Facebook
}

export interface User {
    name?: string;
    email: string;
    password: string;
}

export interface AuthOptions {
    isSignin: boolean;
    provider: AuthTypes;
    user: User;
}
