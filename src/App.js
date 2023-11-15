 // eslint-disable-next-line

import React  from 'react';
import Card from './components/card/card';

function App() {
  return (
   <div>
    <Card 
    first_item="Sedans"
    description_one="Choose a sedan for its affordability and excellent fuel economy.
    Ideal for cruising in the city or on your next road trip."
    second_item="SUVs"
    description_two="Take an SUV for its spacious interior, power, and versatility.
    Perfect for your next family vacation and off-road adventures."
    third_item="Luxury"
    description_three="Cruise in the best car brands without the bloated prices. Enjoy the
    enhanced comfort of a luxury rental and arrive in style."
    />
  
   </div>

  );
}

export default App;
