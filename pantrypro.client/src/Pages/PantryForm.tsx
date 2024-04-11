import React, { useState } from 'react';
import './PantryForm.css';

const PantryForm: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    weight: 0,
    groceryItemTypeId: 0,
    carbs: 0,
    calories: 0,
    protein: 0,
    fat: 0
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any necessary actions, such as sending data to a server
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
    name: '',
    description: '',
    weight: 0,
    groceryItemTypeId: 0,
    carbs: 0,
    calories: 0,
    protein: 0,
    fat: 0
    });
  };

  return (
    <div>
      <h1>Pantry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Grocery Item Type ID:
          <input
            type="number"
            name="groceryItemTypeId"
            value={formData.groceryItemTypeId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Carbs:
          <input
            type="number"
            name="carbs"
            value={formData.carbs}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Protein:
          <input
            type="number"
            name="protein"
            value={formData.protein}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Fat:
          <input
            type="number"
            name="fat"
            value={formData.fat}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PantryForm;
