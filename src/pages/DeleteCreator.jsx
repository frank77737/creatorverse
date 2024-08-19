import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './DeleteCreator.css';

const DeleteCreator = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        const { error } = await supabase.from('creators').delete().eq('id', id);
        if (error) {
            console.error('Error deleting creator:', error);
        } else {
            navigate('/'); // Navigate back to the homepage after deletion
        }
    };

    return (
        <div className="delete-creator">
            <h2>Are you sure you want to delete this creator?</h2>
            <button onClick={handleDelete} className="delete-button">Yes, Delete</button>
            <button onClick={() => navigate(-1)} className="cancel-button">Cancel</button>
        </div>
    );
};

export default DeleteCreator;
