import React from 'react';

const Category = ({ categories, filterByCategory }) => {
  return (
    <div>
      <select onChange={(e) => filterByCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;