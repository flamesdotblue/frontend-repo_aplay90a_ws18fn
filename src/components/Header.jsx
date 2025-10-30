import React from 'react';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
          <Rocket className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-white text-xl md:text-2xl font-semibold tracking-tight">Vibe Blog Manager</h1>
          <p className="text-white/70 text-sm">React • Router • Tailwind • Context</p>
        </div>
      </div>
      <a
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-white/80 hover:text-white transition-colors"
      >
        JSONPlaceholder API →
      </a>
    </header>
  );
};

export default Header;
