import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Plan= () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [dietaryPreferences, setDietaryPreferences] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/nutrition-plan', {
                age, gender, weight, height, activityLevel, dietaryPreferences
            });
            // Handle the response to display the nutrition plan
            console.log('Nutrition Plan:', response.data);
        } catch (error) {
            console.error('Error generating nutrition plan:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} required />
            <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                <option value="sedentary">Sedentary</option>
                <option value="light">Light Activity</option>
                <option value="moderate">Moderate Activity</option>
                <option value="active">Active</option>
            </select>
            <input type="text" placeholder="Dietary Preferences (e.g., vegan, allergies)" value={dietaryPreferences} onChange={(e) => setDietaryPreferences(e.target.value)} />
          <Link to='/plans'>  <button type="submit">Generate Nutrition Plan</button></Link>
        </form>
    );
};

export default Plan;
