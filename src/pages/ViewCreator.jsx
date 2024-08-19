import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './styles/ViewCreator.css';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      let { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (error) console.error('Error fetching creator:', error);
      else setCreator(data);
    };
    fetchCreator();
  }, [id]);

  return (
    <div className="view-creator">
      {creator ? (
        <div className="creator-details">
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel Website</a>
          {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name} thumbnail`} className="creator-image" />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewCreator;
