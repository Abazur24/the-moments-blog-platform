import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/posts/search?q=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching posts:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;