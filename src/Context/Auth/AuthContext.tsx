import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import {User} from '../../interface/user' 
interface AuthState {
    currentUser: User | null;
}

interface Action {
    type: string;
    payload  ?: User | null; 
}

const INITIAL_STATE: AuthState = {
    currentUser: JSON.parse(localStorage.getItem("user") || "null") as User | null,
};

export const AuthContext = createContext<{
    currentUser: User | null;
    dispatch: React.Dispatch<Action>;
}>({ currentUser: null, dispatch: () => null });

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
        console.log(state.currentUser)
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
