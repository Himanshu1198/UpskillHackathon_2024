interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  mentors: string[]; // array of user IDs for mentors
  mentees: string[]; //array of mentees 

}

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
          return state;
  }
};

export default AuthReducer;
