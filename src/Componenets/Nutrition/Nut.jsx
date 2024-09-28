import React from "react";

const Nut = ({ plan }) => {
    return (
        <div>
            <h2>Your Personalized Nutrition Plan</h2>
            <p>Daily Caloric Intake: {plan.caloricIntake}</p>
            <h3>Meal Suggestions:</h3>
            <ul>
                {plan.meals.map((meal, index) => (
                    <li key={index}>{meal}</li>
                ))}
            </ul>
            <h3>Snack Options:</h3>
            <ul>
                {plan.snacks.map((snack, index) => (
                    <li key={index}>{snack}</li>
                ))}
            </ul>
            <h3>Grocery List:</h3>
            <ul>
                {plan.groceryList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Nut;
