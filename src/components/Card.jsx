import { Link } from 'react-router-dom';
import { supabase } from '../client';
import './Card.css';

const Card = ({ creator }) => {

  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', creator.id);
    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      window.location.reload(); // Refresh the page to reflect deletion
    }
  };

  return (
    <div className="card">
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel Website</a>
      {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name} thumbnail`} />}
      
      <Link to={`/creator/${creator.id}`} className="details-button">Details</Link>
      <div className="card-buttons">
        <Link to={`/edit/${creator.id}`} className="edit-button">Edit</Link>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Card;
