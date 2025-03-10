import React from 'react';

const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center container">
      {/* Avatar */}
      <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-black font-semibold text-xl rounded-full">
        A
      </div>

      {/* Dropdown Menu (Always Visible) */}
      <div className="mt-2  flex justify-center">
        <p className="text-sm text-gray-900 font-semibold">Hej Admin</p>
      </div>
    </div>
  );
};

export default UserProfile;