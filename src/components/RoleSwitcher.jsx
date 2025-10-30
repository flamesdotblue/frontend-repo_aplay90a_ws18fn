import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

// Simple local role toggle for the landing experience.
// In the full app this would be provided by a RoleContext.
const RoleSwitcher = () => {
  const [role, setRole] = useState(() => localStorage.getItem('role') || 'user');

  useEffect(() => {
    localStorage.setItem('role', role);
  }, [role]);

  return (
    <div className="w-full bg-white/5 border border-white/15 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
          <Shield className="h-4 w-4 text-white" />
        </div>
        <div className="text-white">
          <p className="text-sm font-medium">Current role</p>
          <p className="text-xs text-white/70 -mt-0.5">Controls visibility of comments in detail view</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg p-1">
        <button
          onClick={() => setRole('user')}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            role === 'user' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
          }`}
        >
          User
        </button>
        <button
          onClick={() => setRole('admin')}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            role === 'admin' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
          }`}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default RoleSwitcher;
