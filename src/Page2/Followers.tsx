import React, { useEffect, useState, useContext } from 'react';
import { CloseButton } from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '@/Context/Auth/AuthContext';
import {User} from '../interface/user'


interface ListItemProps {
  user: User;
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  const { currentUser } = useContext(AuthContext);

  const handleFollowUser = async () => {
    try {
      console.log(currentUser?._id,user._id)
      await axios.post(`http://localhost:8000/api/users/follow/?followerId=${currentUser?._id}&followedToId=${user._id}`);
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  return (
    <div className="flex items-center justify-between p-2 pt-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <img className="w-10 h-10 rounded-full" src={user.img} alt={user.name} />
        <div className="flex flex-col">
          <div className="text-sm text-left">{user.name}</div>
          <div className="text-xs text-gray-500 text-left">{user.email}</div>
        </div>
      </div>
      <div>
        <button className="px-3 py-2 bg-red-800 hover:bg-amber-900 text-white rounded-md" onClick={handleFollowUser}>Follow</button>
      </div>
    </div>
  );
};

interface ListProps {
  onClose: () => void;
}

const List: React.FC<ListProps> = ({ onClose }) => {
  const [users, setUsers] = useState<User[]>([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/getuser');
        setUsers(response.data.users);
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
          {users.map((user, index) => (
            <ListItem key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
