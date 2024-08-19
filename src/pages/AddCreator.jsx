import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { supabase } from '../client';
import './styles/AddCreator.css';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [message, setMessage] = useState(''); // State for confirmation message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('creators').insert([{ name, url, description, imageURL }]);
    if (error) {
      console.error('Error adding creator:', error);
      setMessage('Error adding creator. Please try again.');
    } else {
      console.log('Creator added:', data);
      setMessage('Creator added successfully!');
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="add-creator-container">
      <h1 className="page-title">Add New Creator</h1>
      {message && <p className="confirmation-message">{message}</p>} {/* Display confirmation message */}
      <form onSubmit={handleSubmit} className="add-creator-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="form-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-textarea"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="submit-button">Add Creator</button>
      </form>
      <button onClick={handleBackClick} className="back-button">Back</button> {/* Back button */}
    </div>
  );
};

export default AddCreator;
