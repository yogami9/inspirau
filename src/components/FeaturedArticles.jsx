import React from 'react';

const FeaturedArticles = ({ articles }) => {
  return (
    <section className="p-6 bg-gray-100" id="articles">
      <h2 className="text-xl font-bold mb-4">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{article.title}</h3>
            <p>{article.summary}</p>
            <a href={article.link} className="text-blue-500">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;