import React, { useRef } from 'react';

interface User {
  name: string;
  imageUrl: string;
  profession: string;
}

interface ListItemProps {
  user: User;
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  const listItemRef = useRef<HTMLDivElement>(null); // Create a ref for the list item

  return (
    <div className="flex items-center justify-between p-2 pt-4 border-b border-gray-200" ref={listItemRef}>
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

export default ListItem;
