import React, { useEffect, useState } from 'react';
import { CloseButton } from '@chakra-ui/react';
import Cookies from 'js-cookie'; // Import js-cookie library
import axios from 'axios';

interface User {
  name: string;
  imageUrl: string;
  profession: string;
}

interface ListProps {
  onClose: () => void;
}

const ListItem: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-2 pt-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt={user.name} />
        <div className="flex flex-col">
          <div className="text-sm text-left">{user.name}</div>
          <div className="text-xs text-gray-500 text-left">{user.profession}</div>
        </div>
      </div>
      <div>
        <button className="px-3 py-2 bg-red-800 hover:bg-amber-900 text-white rounded-md">Remove</button>
      </div>
    </div>
  );
};

const List: React.FC<ListProps> = ({ onClose }) => {
  const [users, setUsers] = useState<User[]>([]); // Explicitly provide the type of state as User[]

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users/getuser');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const usersData: User[] = await response.json();
        setUsers(Object.values(usersData));
        console.log(usersData);
        console.log('Type of users:', typeof users);

        Cookies.set('users', JSON.stringify(usersData));
        console.log('Users cookie:', Cookies.get('users'));
        // Store users array in a cookie
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        <CloseButton size="lg" padding={8} position="absolute" top="2" right="2" onClick={onClose} />
        <div className="divide-y divide-gray-200">
          {/* Render users from the state */}
          {users.map((user, index) => (
            <ListItem key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;


// ...

// import React from 'react';
// import { CloseButton } from '@chakra-ui/react';

// interface User {
//   name: string;
//   imageUrl: string;
//   profession: string; 
// }

// const ListItem: React.FC<{ user: User }> = ({ user }) => {
//   return (
//     <div className="flex items-center justify-between p-2 pt-4 border-b border-gray-200">
//       <div className="flex items-center space-x-3">
//         <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt={user.name} />
//         <div className="flex flex-col">
//           <div className="text-sm text-left">{user.name}</div>
//           <div className="text-xs text-gray-500 text-left">{user.profession}</div> 
//         </div>
//       </div>
//       <div>
//         <button className="px-3 py-2 bg-red-800 hover:bg-amber-900 text-white rounded-md">Remove</button>
//       </div>
//     </div>
//   );
// };

// const List: React.FC = () => {
//   const users: User[] = [
//     { name: 'Lena', imageUrl: 'https://source.unsplash.com/40x40/?portrait?1', profession: 'Software Engineer' },
//     { name: 'Lindsay', imageUrl: 'https://source.unsplash.com/40x40/?portrait?2', profession: 'Entrepreneur' },
//     { name: 'Mark', imageUrl: 'https://source.unsplash.com/40x40/?portrait?3', profession: 'Designer' },
//     { name: 'Molly', imageUrl: 'https://source.unsplash.com/40x40/?portrait?4', profession: 'Data Scientist' },
//   ];

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative"> {/* Increased width to w-80 and added relative positioning */}
//         <CloseButton padding={8} size='lg' position="absolute" top="2" right="2" /> {/* Added CloseButton with absolute positioning */}
//         <div className="divide-y divide-gray-200">
//           {users.map((user, index) => (
//             <ListItem key={index} user={user} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;
