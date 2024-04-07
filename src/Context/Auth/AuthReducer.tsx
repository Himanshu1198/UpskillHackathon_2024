import {User} from '../../interface/user'

interface AuthState {
  currentUser: User | null;
}

interface Action {
  type: string;
  currentUser: User | null;
}

const AuthReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
      case "LOGIN": {
          return {
              currentUser: action.currentUser,
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
