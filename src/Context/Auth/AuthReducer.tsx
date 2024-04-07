import {User} from '../../interface/user'

interface AuthState {
  currentUser: User | null;
}

interface Action {
  type: string;
  payload: User | null;
}

const AuthReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
      case "LOGIN": {
          return {
              currentUser: action.payload,
          };
      }
      case "LOGOUT": {
        return {
          currentUser: null,
        };
      }
      
      default:
          return state; // Return current state if action type is not recognized
  }
};

export default AuthReducer;
