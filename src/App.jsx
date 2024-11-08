import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoCard from './components/VideoCard';
import FeaturedArticles from './components/FeaturedArticles';
import Footer from './components/Footer';

const videos = [
  { title: 'Motivation Monday', description: 'Start your week with inspiration!', src: '../public/Peaky Blinders - Wonderful Life.mp4' },
  { title: 'Study Tips for Success', description: 'Learn effective ways to study!', src: '/path/to/your/video2.mp4' },
];

const articles = [
  { title: 'How to Stay Motivated', summary: 'Tips and tricks to keep your energy up.', link: '#' },
  { title: 'Time Management Skills', summary: 'Make the most of your time with these strategies.', link: '#' },
];

const App = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <HeroSection />
      <section className="p-6" id="videos">
        <h2 className="text-xl font-bold mb-4">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </section>
      <FeaturedArticles articles={articles} />
      <Footer />
    </div>
  );
};

export default App;