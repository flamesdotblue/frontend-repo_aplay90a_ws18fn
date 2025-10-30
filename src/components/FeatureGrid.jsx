import React from 'react';
import { Search, Layers, Shield } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: <Search className="h-5 w-5" />,
      title: 'Smart search',
      description: 'Debounced search and user filters to find posts quickly.'
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Infinite scroll',
      description: 'Seamlessly load more posts, 10 at a time up to 100.'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Role-based views',
      description: 'Admins can see comments, users see a clean reading view.'
    }
  ];

  return (
    <section className="px-6 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group bg-white/5 border border-white/15 rounded-xl p-5 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              {f.icon}
            </div>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="mt-1 text-white/70 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
