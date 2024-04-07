  export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    img: string;
    token: string | null;
    __v: number;
    mentors: string[];
    mentees: string[];
    status: string; // Update the status property type
    // Add the currentUser property
}

  