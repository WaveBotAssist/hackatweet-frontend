import React, { useEffect, useState } from 'react';

const Trends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch('/api/trends')
      .then(response => response.json())
      .then(data => setTrends(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div className="trends">
      <h3>Trends</h3>
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>{trend.name} ({trend.count})</li>
        ))}
      </ul>
    </div>
  );
};

export default Trends;
