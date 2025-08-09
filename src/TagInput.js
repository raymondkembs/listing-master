import React, { useState } from 'react';

const TagInput = ({ onChange }) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const addTag = (value) => {
    const newTag = value.trim();
    if (newTag && !tags.includes(newTag)) {
      const updatedTags = [...tags, newTag];
      setTags(updatedTags);
      onChange && onChange(updatedTags);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(input);
      setInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
    onChange && onChange(updatedTags);
  };

  return (
    <div 
        style={styles.container}
        className="search-input"
    >
      {tags.map((tag, index) => (
        <div 
            key={index} 
            style={styles.tag}
            className="shadow-md"
        >
          {tag}
          <span style={styles.remove} onClick={() => removeTag(tag)}>×</span>
        </div>
      ))}
      <input
        type="text"
        style={styles.input}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px',
    borderRadius: '4px',
    minHeight: '40px',
    cursor: 'text',
    backgroundColor: 'white',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    color: '#5ba4a4ff',
    backgroundColor: '#effafaff',
    borderRadius: '16px',
    padding: '4px 8px',
    margin: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  remove: {
    marginLeft: '8px',
    cursor: 'pointer',
    fontWeight: 'bolder',
  },
  input: {
    border: 'none',
    outline: 'none',
    flex: 1,
    minWidth: '100px',
    fontSize: '14px',
    padding: '4px',
    backgroundColor: 'transparent',
    color: '#333',
  }
};

export default TagInput;
