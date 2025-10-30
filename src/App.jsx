import React from 'react';
import Header from './components/Header.jsx';
import HeroCover from './components/HeroCover.jsx';
import RoleSwitcher from './components/RoleSwitcher.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top header */}
      <Header />

      {/* 3D hero cover */}
      <HeroCover />

      {/* Role switcher + CTA */}
      <section className="px-6 md:px-10 relative -mt-10">
        <div className="max-w-5xl mx-auto">
          <RoleSwitcher />

          <div className="mt-6 bg-white/5 border border-white/15 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Blog/Posts management starter</h2>
            <p className="mt-2 text-white/80 max-w-2xl">
              This project will include a custom HTTP client with interceptors, pagination with infinite scroll, URL-driven filters, and secure comment visibility based on role. Use the navigation that will appear here to explore posts once we wire APIs.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:opacity-90 transition-opacity">
                View Posts
              </button>
              <button className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <FeatureGrid />

      {/* Footer */}
      <footer className="mt-auto px-6 md:px-10 py-8 text-white/60 text-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p>Built with React, Vite, Tailwind and a pinch of 3D ✨</p>
          <p>JSONPlaceholder powered</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
