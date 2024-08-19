import { useEffect, useState } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import './styles/ShowCreators.css';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      let { data: creators, error } = await supabase.from('creators').select('*');
      if (error) console.error('Error fetching creators:', error);
      else setCreators(creators);
    };
    fetchCreators();
  }, []);

  return (
    <div className="creator-database">
      <div className="banner">
        <h1>Creator Database</h1>
      </div>
      <div className="creators-list">
        <Link to="/new">
          <button className="add-button">Add Creator</button>
        </Link>
        {creators.length > 0 ? (
          <div className="cards-container">
            {creators.map((creator) => (
              <Card key={creator.id} creator={creator} />
            ))}
          </div>
        ) : (
          <p>No creators available.</p>
        )}
      </div>
    </div>
  );
};

export default ShowCreators;
